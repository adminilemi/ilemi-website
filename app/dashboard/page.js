import GetTips from '@/components/DashboardComp/GetTips';
import RecentlyViewed from '@/components/DashboardComp/HomeComp/RecentlyViewed';
import ReqStats from '@/components/DashboardComp/HomeComp/ReqStats';
import ReqActivities from '@/components/DashboardComp/MyRequest/ReqActivities';
import { PostARequestIcon } from '@/SVGs/SVGFiles';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <main className='container py-5 pb-10'>
      <header className='flex flex-wrap gap-4 justify-between'>
        <h1>Dashboard</h1>
        <ul className='w-full lg:w-3/5 flex flex-wrap gap-4 justify-between rounded-lg p-3 !border-mainColor !border-2'>
          <li className='flex flex-wrap items-center gap-3 grow'>
            <PostARequestIcon />
            <div className='grow'>
              <h4>Recent Updates </h4>
              <p className='text-xs'>Recent Updates from Property4U.ng</p>
            </div>
          </li>
          <li className='grid place-items-center '>
            <Link href='/dashboard/post-a-request' className='main-btn'>
              {' '}
              Post A Request
            </Link>
          </li>
        </ul>
      </header>

      <section className='flex flex-wrap gap-y-6 justify-between mt-10'>
        <article className='w-full lg:w-[35%]'>
          <ReqStats />
          <RecentlyViewed />
        </article>

        <aside className='w-full lg:w-3/5 mb-10'>
          <section className='flex flex-wrap justify-between gap-7 '>
            <section className='card bg-white w-full lg:w-4/12 p-4'>
              <div className='text-center lg:text-start'>
                <h4>Agent(s) Profile</h4>
                <p className='text-xs'>Connect with our pool of Agents!</p>
              </div>
              <hgroup className='mt-5 h-40 grid place-items-center'>
                <h4>No Agents Data yet</h4>
              </hgroup>
            </section>
            <section className='flex-1'>
              <article className=' h-40 grid place-items-center card bg-white'>
                <h4>Advert Placement</h4>
              </article>
              <article className='card bg-white  mt-7 p-5 flex flex-col justify-between'>
                <div className='text-center lg:text-start'>
                  <h4>Recent Updates </h4>
                  <p className='text-xs'>Recent Updates from Property4U.ng</p>
                </div>
                <hgroup className='text-center my-8'>
                  <h4>No Updates yet</h4>
                </hgroup>
                <GetTips />
              </article>
            </section>
          </section>
        </aside>
      </section>
    </main>
  );
}
