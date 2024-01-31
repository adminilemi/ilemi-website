import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/ilemi-logo.svg';
import LogoForYou from '../../public/assets/propertyForYou.png';
import { images } from '@/exports/images';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='d-flex flex-column'>
      <main className='container d-flex flex-column flex-lg-row   justify-content-between  py-5 my-5'>
        <article className={`${styles.logo}  d-flex flex-column col-3 `}>
          <div
            className='col-12 col-md-4 mb-5'
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <figure>
              <Image src={Logo} alt='Ilemi logo' />
            </figure>
            <figure className='mt-3 col-12'>
              <Image src={LogoForYou} alt='Ilemi logo' />
            </figure>
          </div>
        </article>

        <article
          className='d-flex flex-column flex-md-row col-12 col-lg-8 mx-auto justify-content-between'
          data-aos='fade-in'
        >
          <ul className='d-flex flex-column gap-3'>
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

          <ul className='d-flex flex-column gap-3'>
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

          <ul className='d-flex flex-column gap-3'>
            <h5>RESOURCES</h5>
            <li>
              <Link href='#'>News</Link>
            </li>
            <li>
              <Link href='/contact-us'>Contact us</Link>
            </li>
            <li>
              <Link href='#'>FAQ</Link>
            </li>
            <li>
              <Link href='#'>Help Center</Link>
            </li>
          </ul>

          <ul className='d-flex flex-column gap-3'>
            <h5>TERMS & PRIVACY</h5>
            {/* <li>
              <Link href='#'>Trust & Safety</Link>
            </li> */}
            <li>
              <Link href='#'>Terms of Service</Link>
            </li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
          </ul>
        </article>
      </main>
      <hr />
      <section className=' container my-5 d-flex justify-content-between'>
        <small style={{ color: 'var(--Grey6)' }}>
          © 2023 Thistle Technologies
        </small>{' '}
        <div className='d-flex gap-2 align-items-center'>
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
