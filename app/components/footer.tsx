'use client'

const Footer = () => {
  return (
    <footer className={`flex items-center justify-center py-5 text-white bg-[--background]`}>
      <p className='text-center'>
        &copy; {new Date().getFullYear()} monancial. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;