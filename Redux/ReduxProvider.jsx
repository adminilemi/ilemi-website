'use client';
import { persistor, store } from '@/Redux/Stores/store';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import 'animate.css';
import '../app/globals.css';
import 'aos/dist/aos.css';
import 'react-phone-input-2/lib/style.css';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { usePathname } from 'next/navigation';

const ReduxProvider = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  const pathname = usePathname();

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
        {!pathname.includes('/auth/') && <NavBar />}
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
