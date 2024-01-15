'use client';

import React, { useState } from 'react';

// styles
import styles from './NavBar.module.scss';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { usePathname } from 'next/navigation';
import BrandLogo from '../BrandLogo';

function NavBar() {
  const { handleToggle, toggle, setToggle } = useGlobalHooks();
  const currentRoute = usePathname();

  const [drop, setDrop] = useState(false);

  const linkList = [
    { id: 1, title: 'Rent', url: '/rent' },
    { id: 2, title: 'Buy', url: '/buy' },
    { id: 3, title: 'Shortlets', url: '/shortlets' },
    {
      dropwDown: [
        { id: 4, title: 'Create Properties', url: 'shortlets' },
        { id: 5, title: 'Listing', url: 'shortlets' },
      ],
    },
    { id: 7, title: 'Pricing', url: '/shortlets' },
  ];

  return (
    <div>
      <section
        className={`${styles.navContainer} d-flex flex-row align-items-center justify-content-between`}
      >
        <nav className='d-flex container flex-row align-items-center justify-content-between'>
          {/* Logo */}
          <div
            className={`col-2 col-md-1 d-flex flex-row align-items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <div>
              <BrandLogo />
            </div>
          </div>
          <div
            className={` col-12 col-lg-10 ${
              toggle['navbar'] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className='col-12 d-flex flex-column  align-items-center justify-content-center '>
              {/* nav Links */}

              <ul
                data-aos='fade-right'
                data-aos-duration='1500'
                className={` ${styles.navItems} d-flex flex-column flex-lg-row  col-12 justify-content-between align-items-center `}
              >
                <ul className='d-flex flex-column flex-lg-row col-12 col-lg-7 mx-auto justify-content-between text-center text-lg-start '>
                  {linkList.map(({ id, title, url, dropwDown }) => (
                    <li
                      key={id}
                      className={
                        currentRoute === url ? 'isActive' : 'notActive'
                      }
                    >
                      {dropwDown ? (
                        <a
                          onClick={() => setDrop(!drop)}
                          className='position-relative'
                        >
                          Manage Property <FaChevronDown />
                          {drop && (
                            <div
                              className={`${styles.drop} d-flex flex-column `}
                            >
                              {dropwDown.map(({ id, title, url }) => (
                                <div key={id}>
                                  <Link
                                    onClick={() => handleToggle('navbar')}
                                    href={url}
                                  >
                                    {title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </a>
                      ) : (
                        <Link onClick={() => handleToggle('navbar')} href={url}>
                          {title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <li className='d-flex justify-content-center justify-content-lg-end col-11 col-md-6 col-lg-3'>
                  <div className='d-flex flex-column flex-lg-row gap-2 col-12'>
                    <button className={`${styles.login} `}>Login </button>
                    <button className={`${styles.signup} `}>Signup </button>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={() => handleToggle('navbar')}
            className={toggle['navbar'] ? styles.open : styles.ham}
            id='navbar'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
