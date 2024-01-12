'use client';
import React from 'react';
import Slider from 'react-slick';
import { makeItEasyData } from './AllData';
import Image from 'next/image';

const MakeItEasy = ({ styles }) => {
  const settings = {
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
      <article className='container d-flex flex-column flex-md-row justify-content-between'>
        <h3 className='col-12 col-md-5'>
          We make it easy for <em> tenants </em>and<em> landlords.</em>
        </h3>

        <p className='col-12 col-md-5 py-4 py-md-0'>
          Whether it&apos;s selling your current property, getting fan office
          space, or buying a new property, we make it easy and efficient. The
          best part? you&apos;ll save a bunch of money and time with our
          services.
        </p>
      </article>

      <article className='py-5'>
        <Slider className='col-12 col-md-9 mx-auto ' {...settings}>
          {makeItEasyData.map(({ id, title, desc, icon }) => (
            <section
              key={id}
              className={` ${styles.contents} ${
                id === 1 ? styles.bg1 : id === 2 ? styles.bg2 : styles.bg3
              }  d-flex gap-4 align-items-start`}
            >
              <figure>
                <Image src={icon} alt='' />
              </figure>
              <div>
                <h5> {title}</h5>
                <p> {desc}</p>
              </div>
            </section>
          ))}
        </Slider>
      </article>

      <hr />
      <article
        className={`${styles.perce} container d-flex flex-wrap justify-content-center gap-5 text-center my-5`}
      >
        <div>
          <h4>7.4%</h4>
          <p>Property Return Rate</p>
        </div>
        <div>
          <h4>3,856</h4>
          <p>Property in Sell & Rent</p>
        </div>
        <div>
          <h4>2,540</h4>
          <p>Daily Completed Transactions</p>
        </div>
      </article>
    </section>
  );
};

export default MakeItEasy;
