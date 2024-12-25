'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`flex items-center justify-between px-7 py-5 text-white ${isScrolled ? 'scrolled' : ''}`}>
            <div className="flex items-center">
                <Image
                className="mr-4"
                src="/monancial.png"
                alt="Logo"
                width={50}
                height={50}
                />
                <h1 className="title font-semibold font-[family-name:var(--mona-sans)]">monancial.</h1>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-8 mr-8">

                    <li><Link href={`#`}>home</Link></li>
                    <li><Link href={`#`}>about</Link></li>
                    <li><Link href={`#`}>services</Link></li>
                    <li><Link href={`#`}>contact</Link></li>
                </ul>
                <Link href="/" className="btn dashboard">login</Link>
            </div>
        </nav>
    );
};

export default Navbar;