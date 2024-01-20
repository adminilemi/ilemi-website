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

  const renderCity =
    formData.state !== '' &&
    nigeriaStates.find(({ name }) => name === formData.state);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // If the selected field is 'state'
    if (id === 'state') {
      // Find the selected state object
      const selectedState = nigeriaStates.find((state) => state.name === value);

      // Update the city with the first LGA from the selected state
      const defaultCity = selectedState ? selectedState.lgas[0] : '';

      // Update the form data
      setFormData((prev) => ({ ...prev, [id]: value, city: defaultCity }));
    } else {
      // For other fields, simply update the form data
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
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
            <option>State</option>
            {nigeriaStates.map(({ name }) => (
              <option key={name} value={name}>
                {name}{' '}
              </option>
            ))}
          </select>
        </div>

        <div className=' pe-5 col-12 col-md-5'>
          <label htmlFor='city'> City</label>
          <select
            id='city'
            name='city'
            defaultValue={formData.city}
            className='col-12'
            onChange={handleChange}
            required
          >
            {/* Just a placeholder */}
            {formData.state === '' && <option>City</option>}

            {/* This should render inplace of the placeholder when it's true */}
            {formData.state !== '' &&
              renderCity?.lgas?.map((item) => (
                <option key={item} value={item}>
                  {item}{' '}
                </option>
              ))}
          </select>
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
