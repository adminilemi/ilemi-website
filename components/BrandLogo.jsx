import React from 'react';
import Logo from '../public/assets/ilemi-logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
// import IlemiLogo from './SVGs/IlemiLogo';

const BrandLogo = ({ className }) => {
  return (
    <Link href='/' className={`${className} flex`}>
      <Image src={Logo} alt='Ilemi logo' />
      {/* <IlemiLogo /> */}
    </Link>
  );
};

export default BrandLogo;
