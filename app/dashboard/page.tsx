'use server';
import { auth } from '@/auth'
import { SignOutBtn } from '../components/auth-btn';

export default async function Page() {
  const session = await auth();

  if (session?.user) {
    return (
      <>
        <div className={`flex flex-col justify-center items-center h-screen`}>
          <h1>Welcome, {session.user.name}</h1>
          <p>You are now signed in.</p>
          <SignOutBtn text="Logout"
            style="bg-[#ff0000] text-white px-4 py-2 rounded-md mt-4"
          />
        </div>
      </>
    );
  }
}