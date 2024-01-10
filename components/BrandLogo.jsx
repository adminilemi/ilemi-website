import React from 'react';
import Logo from '../public/assets/ilemi-logo-white.png';
import Image from 'next/image';
import Link from 'next/link';

function BrandLogo() {
  return (
    <Link href='/'>
      <Image src={Logo} alt='Ilemi logo' />
    </Link>
  );
}

export default BrandLogo;
