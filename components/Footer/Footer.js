import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/ilemi-logo.svg';
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
          </div>
        </article>

        <article
          className='d-flex flex-column flex-md-row col-12 col-lg-8 mx-auto justify-content-between'
          data-aos='fade-in'
        >
          <ul className='d-flex flex-column gap-3'>
            <h5>BUY, RENT AND SELL</h5>
            <li>
              <Link href='#'>Buy and sell properties</Link>
            </li>
            <li>
              <Link href='#'>Rent home</Link>
            </li>

            <li>
              <Link href='#'>Shortlets</Link>
            </li>
          </ul>

          <ul className='d-flex flex-column gap-3'>
            <h5>ABOUT</h5>
            <li>
              <Link href='#'>Company</Link>
            </li>
            <li>
              <Link href='#'>Pricing</Link>
            </li>
            <li>
              <Link href='#'>Place Ads</Link>
            </li>
          </ul>

          <ul className='d-flex flex-column gap-3'>
            <h5>RESOURCES</h5>
            <li>
              <Link href='#'>News</Link>
            </li>
            <li>
              <Link href='#'>Guides</Link>
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
            <li>
              <Link href='#'>Trust & Safety</Link>
            </li>
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
        <div>
          <FaFacebook color='var(--Grey6)' />{' '}
          <FaInstagram color='var(--Grey6)' />{' '}
          <FaTwitter color='var(--Grey6)' /> <FaLinkedin color='var(--Grey6)' />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
