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
  const { handleToggle, toggle } = useGlobalHooks();
  const currentRoute = usePathname();

  const [drop, setDrop] = useState(false);

  const linkList = [
    { id: 1, title: 'Rent', url: '/rent' },
    { id: 2, title: 'Buy', url: '/buy' },
    // { id: 8, title: 'Sell', url: '/sell' },
    { id: 3, title: 'Shortlets', url: '/shortlets' },
    {
      id: 4,
      title: 'Post a Property',
      url: 'https://agent.property4u.ng/addproperty',
    },
    { id: 5, title: 'Advertise with Us', url: '/advertise' },
    // {
    //   id: 3,
    //   title: 'Shortlets',
    //   url: '#',

    //   // dropwDown: [
    //   //   { id: 4, title: 'Create Properties', url: 'shortlets' },
    //   //   { id: 5, title: 'Listing', url: 'shortlets' },
    //   // ],
    // },
    { id: 6, title: 'Packages', url: '/pricing' },
    { id: 7, title: 'For Landlords', url: '/forlandlords' },
  ];

  return (
    <div>
      <section
        className={`${styles.navContainer} flex flex-row items-center justify-between`}
      >
        <nav className='flex container flex-row items-center justify-between'>
          {/* Logo */}
          <div
            className={`w-3/12 md:w-2/12 lg:w-1/12 flex flex-row items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <div>
              <BrandLogo />
            </div>
          </div>
          <div
            className={` w-full  ${
              toggle['navbar'] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className='w-full flex flex-col  items-center justify-center '>
              {/* nav Links */}

              <ul
                data-aos='fade-right'
                data-aos-duration='1500'
                className={` ${styles.navItems} flex flex-col lg:flex-row  w-full justify-between items-center `}
              >
                <ul className='flex flex-col lg:flex-row w-full lg:w-9/12 mx-auto justify-between text-center lg:text-start '>
                  {linkList.map(({ id, title, url, dropwDown }) => (
                    <li
                      key={id}
                      className={
                        currentRoute === url ? 'isActive' : 'notActive'
                      }
                    >
                      {dropwDown ? (
                        <p onClick={() => setDrop(!drop)} className='relative'>
                          <a href='#'>
                            <span className='ml-1'>Manage Property</span>
                            <FaChevronDown />
                          </a>
                          {drop && (
                            <div className={`${styles.drop} flex flex-col `}>
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
                        </p>
                      ) : (
                        <Link onClick={() => handleToggle('navbar')} href={url}>
                          {title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <li className='flex justify-center lg:justify-end w-11/12 md:w-6/12 lg:w-2/12'>
                  <div className='flex flex-col lg:flex-row gap-2 w-full'>
                    <a
                      href='https://agent.property4u.ng/signin'
                      target='_blank'
                      className={`${styles.login} text-center`}
                    >
                      Login{' '}
                    </a>
                    <a
                      href='https://agent.property4u.ng/signup'
                      target='_blank'
                      className={`${styles.signup} text-center`}
                    >
                      Signup{' '}
                    </a>
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
