'use client';
import React, { useState } from 'react';
import styles from '../SearhTab.module.scss';
import { nigeriaStates } from '@/components/AllData';
import { useMyContext } from '@/utils/ContextProvider';
import { useRouter } from 'next/navigation';

const SellSearch = () => {
  const [formData, setFormData] = useState({ state: '', city: '' });
  const { searchDataDispatch } = useMyContext();
  const route = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.state !== '' && formData.city !== '') {
      searchDataDispatch({ type: 'SELL', payload: formData });
      route.push('/sell');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.RentSearch} d-flex flex-column flex-md-row justify-content-between align-items-center `}
    >
      <section className='d-flex flex-wrap gap-3'>
        <div className=' pe-5 col-12 col-md-5'>
          <label htmlFor='State'> State</label>
          <select
            id='state'
            name='state'
            defaultValue={formData.state}
            className='col-12'
            onChange={handleChange}
            required
          >
            <option>Select State</option>
            {nigeriaStates.map(({ name }) => (
              <option key={name} value={name}>
                {name}{' '}
              </option>
            ))}
          </select>
        </div>

        <div className=' pe-5 col-12 col-md-5'>
          <label htmlFor='city'> City</label>
          <input
            id='city'
            name='city'
            type='text'
            defaultValue={formData.city}
            className='col-12'
            onChange={handleChange}
            placeholder='Enter city'
            required
          />
        </div>
      </section>

      <div className='mt-3 mt-md-0'>
        {' '}
        <button type='submit' className='main-btn'>
          {' '}
          Browse Properties{' '}
        </button>{' '}
      </div>
    </form>
  );
};

export default SellSearch;
