'use client';
import { persistor, store } from '@/Redux/Stores/store';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'animate.css';
import '../app/globals.css';
import 'aos/dist/aos.css';
// import 'react-phone-input-2/lib/style.css';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { usePathname } from 'next/navigation';
import { ContextProvider } from '@/utils/ContextProvider';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';

const ReduxProvider = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  const pathname = usePathname();
  const shouldRenderNavBarAndFooter =
    !pathname.includes('/create-account') &&
    !pathname.includes('/auth/') &&
    !pathname.includes('/login-account');

  // AOS animation
  const AOS = require('aos');
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // or a loading spinner
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position='top-center' />

        <ContextProvider>
          {shouldRenderNavBarAndFooter && <NavBar />}
          {children}
          {shouldRenderNavBarAndFooter && <Footer />}{' '}
        </ContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
