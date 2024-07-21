'use client';
import React, { useState } from 'react';

import './Sidebar.scss';
import { SidebarData } from './SidebarData';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import Link from 'next/link';
import Logout from '../Logout/Logout';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import SidebarIcon from '@/components/SidebarIcon';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { LogoutIcon } from '@/SVGs/SVGFiles';

const Sidebar = () => {
  const toggle = useSelector(selectGlobal);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const currentRoute = usePathname();
  const { handleShow } = useGlobalHooks();

  const Employer = SidebarData.Employer;
  const Account = SidebarData.Account;

  return (
    <main className=' sidebarContainer relative'>
      <article className={`sidebar `}>
        <div className='mb-5 mt-3 flex flex-col gap-3  items-start '>
          <div
            onClick={() => setToggleSideBar(!toggleSideBar)}
            // className='absolute -right-4'
          >
            {toggleSideBar ? (
              <GoSidebarExpand className='text-grey-300' size={25} />
            ) : (
              <GoSidebarCollapse className='text-grey-300' size={25} />
            )}
          </div>
          <SidebarIcon sidebar={toggleSideBar} />{' '}
        </div>
        <ul className='mt-5 mt-lg-0  flex flex-col justify-between'>
          {Employer.map(({ id, url, icon, title }) => (
            <Link
              key={id}
              href={url}
              className={
                currentRoute === url
                  ? 'sidebarActive'
                  : !toggleSideBar
                  ? 'mx-auto sidebarNotActive'
                  : 'sidebarNotActive'
              }
            >
              <hgroup className='flex gap-1 items-center tabTitle'>
                <h4 className=''>{icon} </h4>
                {toggleSideBar && <h4>{title}</h4>}
              </hgroup>
            </Link>
          ))}
        </ul>
        <ul className='mt-5  flex flex-col justify-between'>
          {Account.map(({ id, url, icon, title }) => (
            <Link
              key={id}
              href={url}
              className={
                currentRoute === url
                  ? 'sidebarActive'
                  : !toggleSideBar
                  ? 'mx-auto sidebarNotActive'
                  : 'sidebarNotActive'
              }
            >
              <li>
                <hgroup className='flex gap-1 items-center tabTitle'>
                  <h4 className=''>{icon} </h4>
                  {toggleSideBar && <h4>{title}</h4>}
                </hgroup>
              </li>
            </Link>
          ))}
        </ul>
        <li
          className='sidebarNotActive tabTitle'
          onClick={() => handleShow('logout')}
        >
          <hgroup className='flex flex-row items-center tabTitle'>
            <h4 className=''>
              <LogoutIcon />
            </h4>
            <h4> {toggleSideBar && Logout} </h4>
          </hgroup>
        </li>
      </article>

      {toggle['logout'] && (
        <Logout id='logout' close={() => handleShow('logout')} />
      )}
    </main>
  );
};

export default Sidebar;
