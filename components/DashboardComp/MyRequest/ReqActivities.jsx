import { OfferIcon, PostAReqIcon, SentOffer } from '@/SVGs/SVGFiles';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import GetTips from '../GetTips';

const ReqActivities = () => {
  return (
    <section className='bg-white  min-h-screen'>
      <div className='flex justify-end p-5 container'>
        <Link href='/dashboard/post-a-request' className='main-btn'>
          Post A Request
        </Link>
      </div>
      <hr />

      <hgroup className='px-5 mb-4'>
        <h4 className=''>Recent Activities</h4>
      </hgroup>
      <ul className='px-5 flex flex-col gap-5'>
        <li>
          <div className='flex gap-3'>
            <SentOffer />
            <div>
              <h5 className='text-sm font-bold '>Sent an offer</h5>
              <small className='text-xs text-grey-300'>
                You just sent a message offer for Beverly Springfield.
              </small>
            </div>
          </div>
        </li>
        <li>
          <div className='flex gap-3'>
            <OfferIcon />
            <div>
              <h5 className='text-sm font-bold '>Offer Reminder</h5>
              <small className='text-xs text-grey-300'>
                we noticed you viewed Beverly Spring last week .
              </small>
            </div>
          </div>
        </li>
        <li>
          <div className='flex gap-3'>
            <PostAReqIcon />
            <div>
              <h5 className='text-sm font-bold '>Posted A Request </h5>
              <small className='text-xs text-grey-300'>
                Your request application has been reviewed and published.
              </small>
            </div>
          </div>
        </li>

        <li>
          <GetTips />
        </li>
      </ul>
    </section>
  );
};

export default ReqActivities;
