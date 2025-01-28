'use client';
import $ from 'jquery';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SignInBtn } from '../components/auth-btn';

export default function Page() {
  const signIn = () => {
    $('.register').slideUp(() => {
      $('.register').addClass('hidden');
      $('.login').slideDown().removeClass('hidden');
      $('.register input').each(function() {
        $(this).prop('required', false);
        $(this).val('');
      });
    });
  }

  const signUp = () => {
    $('.login').slideUp(() => {
      $('.login').addClass('hidden');
      $('.register').slideDown().removeClass('hidden');
      $('.login input').each(function() {
        $(this).prop('required', true);
        $(this).val('');
      });
    });
  }

  const [dark, setDark] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDark(e.matches);
    
    setDark(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen`}
        style={{ backgroundImage: 'url(monanciall.png)' }}
      >
        <div className={`p-8 rounded-lg shadow-lg backdrop-blur-md`}
          style={{ backgroundColor: dark ? '#00000033' : '#ffffff33' }}
        >
          <div className='login'>
            <h1 className='text-4xl font-bold'>Login</h1>
            <form className='mt-4'>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium'>Email</label>
                <input type='email' id='email' name='email' placeholder='example@email.com' required
                  className='mt-1 block w-[20rem] px-3 py-2 bg-[#00000000] border border-[--secondary] rounded-md focus:border-[--primary] focus:outline-none sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-sm font-medium'>Password</label>
                <input type='password' id='password' name='password' placeholder='********' required
                  className='mt-1 block w-[20rem] px-3 py-2 bg-[#00000000] border border-[--secondary] rounded-md focus:border-[--primary] focus:outline-none sm:text-sm'
                />
              </div>
              <div className='mb-1'>
                <Link href='#' onClick={() => signUp()} className='flex justify-center text-[--secondary] transition-all duration-300 hover:text-[--primary]'>Don&apos;t have an account? Sign Up!</Link>
              </div>
              <button type='submit' className='w-full px-3 py-2 text-white transition-all duration-300 bg-[--secondary] rounded-lg hover:bg-[--primary] focus:outline-none'>Login</button>
              <hr className='mt-3'/>
              <div className="flex mt-3">
                {['Google', 'GitHub'].map(provider => (
                <SignInBtn key={provider} provider={provider.toLowerCase()} text={provider}
                  style={`auth-btn w-full px-3 py-2 mx-1 text-white transition-all duration-300 bg-[--secondary] rounded-lg hover:bg-[--primary] focus:outline-none`}
                />
                ))}
              </div>
            </form>
          </div>
          <div className='register hidden'>
            <h1 className='text-4xl font-bold'>Register</h1>
            <form className='mt-4'>
              <div className='flex mb-4'>
                <div className='mr-2'>
                  <label htmlFor='first' className='block text-sm font-medium'>First Name</label>
                  <input type='first' id='first' name='first' placeholder='John' required
                    className='mt-1 block w-[9.5rem] px-3 py-2 bg-[#00000000] border border-[--secondary] rounded-md focus:border-[--primary] focus:outline-none sm:text-sm'
                  />
                </div>
                <div className='ml-2'>
                  <label htmlFor='last' className='block text-sm font-medium'>Last Name</label>
                  <input type='last' id='last' name='last' placeholder='Doe' required
                    className='mt-1 block w-[9.5rem] px-3 py-2 bg-[#00000000] border border-[--secondary] rounded-md focus:border-[--primary] focus:outline-none sm:text-sm'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium'>Email</label>
                <input type='email' id='email' name='email' placeholder='example@email.com' required
                  className='mt-1 block w-[20rem] px-3 py-2 bg-[#00000000] border border-[--secondary] rounded-md focus:border-[--primary] focus:outline-none sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-sm font-medium'>Password</label>
                <input type='password' id='password' name='password' placeholder='********' required
                  className='mt-1 block w-[20rem] px-3 py-2 bg-[#00000000] border border-[--secondary] rounded-md focus:border-[--primary] focus:outline-none sm:text-sm'
                />
              </div>
              <div className='mb-1'>
                <Link href='#' onClick={() => signIn()} className='flex justify-center text-[--secondary] transition-all duration-300 hover:text-[--primary]'>Already have an account? Sign In!</Link>
              </div>
              <button type='submit' className='w-full px-3 py-2 text-white transition-all duration-300 bg-[--secondary] rounded-lg hover:bg-[--primary] focus:outline-none'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}