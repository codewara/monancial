import { NextResponse, NextRequest } from 'next/server';
import { auth } from '@/auth';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/access'];

export default async function middleware(req: NextRequest) {
    const session = await auth();

    const { pathname } = req.nextUrl;

    const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
    const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

    if (isProtected && !session) return NextResponse.redirect(new URL('/access', req.nextUrl));
    if (isPublic && session) return NextResponse.redirect(new URL('/dashboard', req.nextUrl));

    return NextResponse.next();
}