'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';

export const ImageSlider = ({ styles, imageData, settings }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='position-relative'>
      <Slider ref={sliderRef} className='' {...settings}>
        {imageData?.map(({ _id, url }) => (
          <figure key={_id}>
            <Image
              fill
              sizes='100%'
              src={url}
              alt='Ilemi product image'
              placeholder='blur'
              blurDataURL='data:image/jpeg...'
              style={{ objectFit: 'cover' }}
            />
          </figure>
        ))}
      </Slider>

      <div
        className={`${styles.sliderBtn} d-flex justify-content-between align-items-center `}
      >
        <button onClick={next}>
          <FaChevronLeft />
        </button>
        <button onClick={previous}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
