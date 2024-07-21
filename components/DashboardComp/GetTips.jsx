import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

const GetTips = () => {
  return (
    <div className='card p-3 !bg-grey-400 flex flex-col gap-3'>
      <h4 className='flex items-center gap-3 text-mainColor'>
        <MdOutlineTipsAndUpdates /> Get Tips{' '}
      </h4>
      <p className='text-xm text-Grey6'>
        Connect with us on our social media pages for tips and updates{' '}
      </p>
      <div className='flex items-center gap-3'>
        {' '}
        <FaFacebook className='text-mainColor' />{' '}
        <FaInstagram className='text-mainColor' />{' '}
      </div>
    </div>
  );
};

export default GetTips;
