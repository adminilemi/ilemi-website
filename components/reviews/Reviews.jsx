'use client';

import { images } from '@/exports/images';
import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';

function Reviews({ styles }) {
  const reviews = [
    {
      id: 1,
      name: 'Dozie Solomon',
      job: 'CEO Aegle Health',
      comment:
        'Jupita being an expert in digital transformation and software development were able to articulate and implement our unique solutions with a high degree of competence and standard which we are thankful for.',
      imageUrl: images.reviewImageC,
    },
    {
      id: 2,
      name: 'Ruth Iselema',
      job: 'CEO Bitmama',
      comment:
        'Jupita being an expert in digital transformation and software development were able to articulate and implement our unique solutions with a high degree of competence and standard which we are thankful for.',
      imageUrl: images.reviewImageB,
    },
    {
      id: 3,
      name: 'Abraham Ojes',
      job: 'Co-founder Collect Africa',
      comment:
        'We had a great experience with Jupita. From the very beginning, we could tell that they were very professional, respectful and personable. I would not hesitate to recommend Jupita to anyone looking for a design agency.',
      imageUrl: images.reviewImageA,
    },
  ];

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <div className={` ${styles.sliders} `}>
      <Slider ref={sliderRef} {...settings}>
        {reviews.map(({ id, name, job, comment, imageUrl }) => (
          <section
            className={`${styles.contents} col-12 d-flex flex-column flex-lg-row justify-content-between  p-3`}
            key={id}
          >
            <figure className='col-12 col-lg-5 my-5 my-lg-0'>
              <Image src={imageUrl} alt='Emdo Review user' />
            </figure>
            <div className='col-12 col-lg-6 mt-3 mt-lg-4'>
              <p className='mb-5'> {comment} </p>
              <h6> {name} </h6>
              <small> {job} </small>
            </div>
          </section>
        ))}
      </Slider>
      <div className={`${styles.sliderBtns} mt-5 d-flex gap-3`}>
        <button type='button' onClick={previous}>
          <svg
            width='59'
            height='58'
            viewBox='0 0 59 58'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='58.1323'
              y='57.1912'
              width='56.4411'
              height='56.4411'
              rx='28.2206'
              transform='rotate(-180 58.1323 57.1912)'
              stroke='#333843'
              strokeWidth='1.5'
            />
            <g clipPath='url(#clip0_2932_1911)'>
              <path
                d='M36.9828 28.9706H22.8406'
                stroke='#333843'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M29.9117 36.0416L22.8406 28.9706L29.9117 21.8995'
                stroke='#333843'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_2932_1911'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 29.9117 45.9412)'
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button type='button' onClick={next}>
          <svg
            width='59'
            height='58'
            viewBox='0 0 59 58'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='58.1323'
              y='57.1912'
              width='56.4411'
              height='56.4411'
              rx='28.2206'
              transform='rotate(-180 58.1323 57.1912)'
              stroke='#333843'
              strokeWidth='1.5'
            />
            <g clipPath='url(#clip0_2932_1911)'>
              <path
                d='M22.8406 28.9706H36.9828'
                stroke='#333843'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M29.9117 36.0416L36.9828 28.9706L29.9117 21.8995'
                stroke='#333843'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_2932_1911'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 29.9117 45.9412)'
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Reviews;
