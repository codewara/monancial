'use client';
import { login, logout } from '@/lib/actions/auth';
import Image from 'next/image';

interface InProps {
  provider: string;
  style: string;
  text: string;
}

interface OutProps {
  style: string;
  text: string;
}

export const SignInBtn: React.FC<InProps> = ({ provider, style, text }) => {
  return (
    <button type='button'
      onClick={() => login(provider)}
      className={ style }
    >
      <Image src={`/${provider}.png`} alt={provider} width={25} height={25}
        className='justify-self-center'
      />
      <span className=''>{ text }</span>
    </button>
  );
};

export const SignOutBtn: React.FC<OutProps> = ({ style, text }) => {
  return (
    <button type='button'
      onClick={() => logout()}
      className={ style }
    ><span>{ text }</span></button>
  );
};