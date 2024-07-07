import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../../public/assets/ilemi-logo.svg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import IlemiLogo from '../SVGs/IlemiLogo';

function Footer() {
  return (
    <footer className='flex flex-col'>
      <main className='container flex flex-col lg:flex-row justify-between py-5 my-5'>
        <article className={`${styles.logo}  flex flex-col w-3/12 `}>
          <div
            className='w-11/12 md:w-4/12 mb-5'
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            {/* <figure>
              <Image src={Logo} alt='Ilemi logo' />
            </figure> */}

            <IlemiLogo />
          </div>
        </article>

        <article
          className='flex flex-col md:flex-row w-11/12 lg:w-8/12 mx-auto justify-between'
          data-aos='fade-in'
        >
          <ul className='flex flex-col gap-3'>
            <h5>BUY, RENT AND SELL</h5>
            <li>
              <Link href='/buy'>Buy and sell properties</Link>
            </li>
            <li>
              <Link href='/rent'>Rent home</Link>
            </li>

            <li>
              <Link href='/shortlets'>Shortlets</Link>
            </li>
          </ul>

          <ul className='flex flex-col gap-3'>
            <h5>ABOUT</h5>
            <li>
              <Link href='/about-us'>Company</Link>
            </li>
            <li>
              <Link href='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link href='/advertise'>Place Ads</Link>
            </li>
          </ul>

          <ul className='flex flex-col gap-3'>
            <h5>RESOURCES</h5>
            <li>
              <Link href='#'>News</Link>
            </li>
            <li>
              <Link href='/contact-us'>Contact us</Link>
            </li>
            {/* <li>
              <Link href='#'>FAQ</Link>
            </li> */}
            {/* <li>
              <Link href='#'>Help Center</Link>
            </li> */}
          </ul>

          <ul className='flex flex-col gap-3'>
            <h5>TERMS & PRIVACY</h5>
            {/* <li>
              <Link href='#'>Trust & Safety</Link>
            </li> */}
            <li>
              <Link href='/tos'>Terms of Service</Link>
            </li>
            {/* <li>
              <Link href='#'>Privacy Policy</Link>
            </li> */}
          </ul>
        </article>
      </main>
      <hr />
      <section className=' container my-5 flex justify-between'>
        <small className='text-Grey6'>© 2023 Thistle Technologies</small>{' '}
        <div className='flex gap-2 items-center'>
          <a
            href='https://web.facebook.com/profile.php?id=61553724364511'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook color='var(--Grey3)' />
          </a>
          <a
            href='https://www.instagram.com/ilemi.ng_?igsh=bjdldTJmNnY5bTlh'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram color='var(--Grey3)' />
          </a>
          {/* <a target='_blank' rel='noreferrer'>
            <FaTwitter color='var(--Grey3)' />{' '}
          </a>
          <a target='_blank' rel='noreferrer'>
            <FaLinkedin color='var(--Grey3)' />
          </a> */}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
