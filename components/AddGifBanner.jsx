import Image from 'next/image';
import React from 'react';

const AddGifBanner = ({ images }) => {
  return (
    <div>
      <Image src={images} alt=' ' />
    </div>
  );
};

export default AddGifBanner;
