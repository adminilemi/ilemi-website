'use client';

import { useGlobalHooks } from '@/Hooks/globalHooks';
import React from 'react';

function Buttons({ text, handleClick, className }) {
  const { toggle, btnTaps } = useGlobalHooks();

  return (
    <button
      // data-aos="zoom-out"
      // data-aos-duration="1500"
      className={`${toggle ? 'btnScaleUp' : ''} ${className}`}
      onClick={() => {
        handleClick;
        btnTaps();
      }}
    >
      {text}
    </button>
  );
}

export default Buttons;
