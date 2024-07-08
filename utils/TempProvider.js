'use client';
import React from 'react';
import { ContextProvider } from './ContextProvider';
import AOSAnimation from './AosInit';
import NextTopLoader from 'nextjs-toploader';

const TempProvider = ({ children }) => {
  return (
    <main>
      <ContextProvider>
        <NextTopLoader showSpinner={false} />

        <AOSAnimation>{children}</AOSAnimation>
      </ContextProvider>
    </main>
  );
};

export default TempProvider;
