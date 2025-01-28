'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      const sections = document.querySelectorAll('section[id]');
      let currentSection: string | null = null;

      sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarHeight = typeof window !== 'undefined' ? document.querySelector('nav')?.offsetHeight || 0 : 0;
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = navbarHeight + 32;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      {/* Navigation Bar */}
      <nav className={`flex items-center justify-between px-7 py-5 text-white ${isScrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center">
          <Link className={`flex`} href="/">
            <Image
              className="mr-4"
              src="/monancial.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="title font-semibold font-[family-name:--mona-sans]">monancial.</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <ul className="flex gap-8 mr-8">
            {['home', 'about', 'services', 'contact'].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                onClick={(e) => handleSmoothScroll(e, section)}
                className={activeSection === section ? 'active' : ''}
              >
              {section}
              </Link>
            </li>
            ))}
          </ul>
          <Link href="/dashboard" className="btn dashboard">dashboard</Link>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex md:hidden">
          <button onClick={ () => {
            const mobileNav = document.querySelector('.mobilenav');
            if (mobileNav) mobileNav.classList.toggle('translate-x-full');
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Sidebar */}
      <div className={`mobilenav transform translate-x-full fixed top-[90px] right-0 h-screen w-[50%] gap-8 p-6 md:hidden`}>
      <ul className="flex flex-col gap-4">
          {['home', 'about', 'services', 'contact'].map((section) => (
          <li key={section}>
            <Link
              href={`#${section}`}
              onClick={(e) => handleSmoothScroll(e, section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section}
            </Link>
          </li>
          ))}
        </ul>
        <Link href="/dashboard" className="btn dashboard">dashboard</Link>
      </div>
    </>
  );
};

export default Navbar;