'use client';

import React, { useState } from 'react';
import styles from './PropertyCard.module.scss';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useGlobalHooks } from '@/Hooks/globalHooks';
function PropertyCard({
  url,
  property: {
    _id,
    Property_Name,
    MonthlyRent,
    InteriorImages,
    ExteriorImages,
    StreetAddress,
    bed,
    bathroom,
    SquareFoot,
  },
}) {
  const [click, setClick] = useState(false);
  const { formatNumInThousands } = useGlobalHooks();

  return (
    <Link
      href={`${url}/${_id}`}
      key={_id}
      className={`${styles.productCard}  d-flex flex-column`}
    >
      <figure>
        <Image
          fill
          src={InteriorImages[0]?.url || ExteriorImages[0]?.url}
          sizes='100%'
          alt='Ilemi product image'
          placeholder='blur'
          blurDataURL='data:image/jpeg...'
          style={{ objectFit: 'cover' }}
        />
      </figure>
      <section className='d-flex justify-content-between py-3 px-4'>
        <div className='flex-fill'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className='viewMore'>
              ₦{formatNumInThousands(MonthlyRent)} <span>/Yearly</span>{' '}
            </h3>
            <div className={styles.heart} onClick={() => setClick(!click)}>
              {click ? (
                <div>
                  <FaHeart color='var(--mainColor)' />
                </div>
              ) : (
                <div>
                  <FaRegHeart color='var(--mainColor)' />{' '}
                </div>
              )}
            </div>
          </div>
          <h3 className='my-2'>{Property_Name} </h3>
          <p>{StreetAddress.slice(0, 20)}... </p>
        </div>
      </section>
      <section className='border-top px-3 py-3 d-flex justify-content-between'>
        <small>
          {' '}
          <span>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M15 9.375H3.75V5.3125C3.75124 4.89848 3.91625 4.50177 4.20901 4.20901C4.50177 3.91625 4.89848 3.75124 5.3125 3.75H14.6875C15.1015 3.75124 15.4982 3.91625 15.791 4.20901C16.0837 4.50177 16.2488 4.89848 16.25 5.3125V9.375H15Z'
                stroke='#5F259F'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.875 16.25V11.875C1.87696 11.2126 2.14098 10.5778 2.6094 10.1094C3.07781 9.64098 3.71256 9.37696 4.375 9.375H15.625C16.2874 9.37696 16.9222 9.64098 17.3906 10.1094C17.859 10.5778 18.123 11.2126 18.125 11.875V16.25'
                stroke='#5F259F'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.875 16.25V15.9375C1.87572 15.6891 1.97473 15.451 2.15038 15.2754C2.32604 15.0997 2.56408 15.0007 2.8125 15H17.1875C17.4359 15.0007 17.674 15.0997 17.8496 15.2754C18.0253 15.451 18.1243 15.6891 18.125 15.9375V16.25'
                stroke='#5F259F'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>{' '}
          {bed} Beds
        </small>
        <small>
          {' '}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <g clipPath='url(#clip0_283_14114)'>
                <path
                  d='M3.33333 10H16.6667C16.8877 10 17.0996 10.0878 17.2559 10.2441C17.4122 10.4004 17.5 10.6123 17.5 10.8333V13.3333C17.5 14.2174 17.1488 15.0652 16.5237 15.6904C15.8986 16.3155 15.0507 16.6667 14.1667 16.6667H5.83333C4.94928 16.6667 4.10143 16.3155 3.47631 15.6904C2.85119 15.0652 2.5 14.2174 2.5 13.3333V10.8333C2.5 10.6123 2.5878 10.4004 2.74408 10.2441C2.90036 10.0878 3.11232 10 3.33333 10V10Z'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5 10V4.16667C5 3.72464 5.17559 3.30072 5.48816 2.98816C5.80072 2.67559 6.22464 2.5 6.66667 2.5H9.16667V4.375'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3.33301 17.5L4.16634 16.25'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.6663 17.5L15.833 16.25'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_283_14114'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </span>{' '}
          {bathroom} Bathrooms
        </small>
        <small>
          {' '}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <g clipPath='url(#clip0_283_14117)'>
                <path
                  d='M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2 13.1716L6.36371 17.5353'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13.6367 17.5353L18.0004 13.1716'
                  stroke='#5F259F'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_283_14117'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>{' '}
          </span>{' '}
          {SquareFoot}
        </small>
      </section>
    </Link>
  );
}

export default PropertyCard;
