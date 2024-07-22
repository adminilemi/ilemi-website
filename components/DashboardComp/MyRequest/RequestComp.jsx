'use client';
import React, { useState } from 'react';
import Search from '@/components/Search';
import DatePicker from 'react-datepicker';

const RequestComp = () => {
  const [formData, setFormData] = useState({ date: '' });

  return (
    <section className=''>
      <header className='flex items-center justify-between gap-4 bg-white p-2 rounded-lg'>
        <select className='!bg-transparent'>
          {['All', 'Total request', 'Total view'].map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>

        <Search placeholder='Search request' className='grow !bg-transparent' />
        <div className='flex-1'>
          <DatePicker
            id='date'
            name='date'
            // onChange={(date) => {
            //   setFormData((prev) => ({
            //     ...prev,
            //     date: date?.toISOString(),
            //   }));
            // }}
            // selected={formData?.date}
            className='form-control !bg-transparent'
            placeholderText='dd/mm/yyyy'
            showIcon
            required
          />
        </div>
      </header>

      <section className='card !bg-white p-3 my-8'>
        <ul className=' flex flex-wrap justify-between gap-3 divide-x text-lg font-bold'>
          <li className='px-7'>
            Overview
            <p className='font-normal text-sm'>Last 30 days</p>
          </li>
          <li className='px-7'>
            <p className='font-normal text-sm'>Total Request</p>
            <h4>0</h4>
          </li>
          <li className='px-7'>
            <p className='font-normal text-sm'>Total Viewed</p>
            <h4>0</h4>
          </li>
          <li className='px-7'>
            <p className='font-normal text-sm'>Total Response</p>
            <h4>0</h4>
          </li>
        </ul>

        <ul className='flex items-center gap-4 mt-7 bg-grey-400 rounded-lg p-3 text-lg font-bold'>
          <li className='w-2/12'>Date</li>
          <li className='flex-1'>Request(s)</li>
        </ul>
      </section>
    </section>
  );
};

export default RequestComp;
