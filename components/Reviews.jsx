'use client';
import React from 'react';
import Slider from 'react-slick';
import { reviewsData } from './AllData';

const Reviews = ({ styles }) => {
  const reviewSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.makeItEasy}>
      <hgroup className='container text-center'>
        <h3 className='w-full'>
          Here what our <em>clients </em> says about <em> us</em> and our{' '}
          <em> Agents</em> .
        </h3>
      </hgroup>

      <article className='py-5'>
        <Slider className='w-11/12 md:w-9/12 mx-auto ' {...reviewSettings}>
          {reviewsData.map(({ id, title, desc }) => (
            <section
              key={id}
              className={` ${styles.contents} ${styles.bg2}  !flex flex-col lg:flex-row gap-4 items-center lg:items-start lg:text-start text-center `}
            >
              <div className='flex-1'>
                <p> {desc}</p>
                <small className=''> {title}</small>
              </div>
            </section>
          ))}
        </Slider>
      </article>
    </section>
  );
};

export default Reviews;
