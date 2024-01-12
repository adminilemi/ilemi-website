import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';

const AddGifBanner = () => {
  return (
    <div>
      <Image src={images.gif} alt=' ' />
    </div>
  );
};

export default AddGifBanner;
