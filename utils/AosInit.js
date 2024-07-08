'use client';
import { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'aos/dist/aos.css';
import 'animate.css';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';

export default function AOSAnimation({ children }) {
  const currentRoute = usePathname();

  // AOS animation
  const AOS = require('aos');
  useEffect(() => {
    AOS.init();
  }, []);

  const shouldRenderNavBarAndFooter =
    !currentRoute.includes('/create-account') &&
    !currentRoute.includes('/auth/') &&
    !currentRoute.includes('/login-account');

  return (
    <div>
      {shouldRenderNavBarAndFooter && <NavBar />}
      {children}
      {shouldRenderNavBarAndFooter && <Footer />}{' '}
    </div>
  );
}
