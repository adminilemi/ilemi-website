'use client';
import React, { useState } from 'react';
import { nigeriaStates, propertyType } from '../AllData';
import styles from './FilterForm.module.scss';
import { useGlobalHooks } from '@/Hooks/globalHooks';

const FilterForm = ({ setPageFilterData }) => {
  const { formatNumInThousands } = useGlobalHooks();
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    skip: 0,
    limit: 6,
  });

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
    setPageFilterData(formData);
  };

  return (
    <form className={styles.filterForm} onSubmit={handleSubmit}>
      <div className=''>
        <select id='state' name='state' onChange={handleChange} required>
          <option>State</option>
          {nigeriaStates.map(({ name }) => (
            <option key={name} value={name}>
              {name}{' '}
            </option>
          ))}
        </select>
      </div>

      <div className=''>
        <select id='city' name='city' onChange={handleChange}>
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

      <div>
        <select id='minPrice' name='minPrice' onChange={handleChange}>
          <option value=''>Min Price</option>

          {[
            { title: '50,000', value: 500000 },
            { title: '100,000', value: 100000 },
            { title: '200,000', value: 200000 },
            { title: '300,000', value: 300000 },
            { title: '400,000', value: 400000 },
            { title: '500,000', value: 500000 },
            { title: '600,000', value: 600000 },
            { title: '700,000', value: 700000 },
            { title: '800,000', value: 800000 },
            { title: '900,000', value: 900000 },
            { title: '1 million', value: 1000000 },
            { title: '2 million', value: 2000000 },
            { title: '3 Millon', value: 3000000 },
            { title: '5 Million', value: 5000000 },
            { title: '10 Million', value: 10000000 },
            { title: '20 Million', value: 20000000 },
            { title: '30 Million', value: 30000000 },
            { title: '40 Million', value: 40000000 },
            { title: '50 Million', value: 50000000 },
            { title: '100 million', value: 100000000 },
          ].map(({ title, value }, idx) => (
            <option key={idx} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select id='maxPrice' name='maxPrice' onChange={handleChange}>
          <option value=''>Max Price</option>

          {[
            { title: '500,000', value: 500000 },
            { title: '600,000', value: 600000 },
            { title: '700,000', value: 700000 },
            { title: '800,000', value: 800000 },
            { title: '900,000', value: 900000 },
            { title: '1 million', value: 1000000 },
            { title: '2 million', value: 2000000 },
            { title: '3 Millon', value: 3000000 },
            { title: '5 Million', value: 5000000 },
            { title: '10 Million', value: 10000000 },
            { title: '20 Million', value: 20000000 },
            { title: '30 Million', value: 30000000 },
            { title: '40 Million', value: 40000000 },
            { title: '50 Million', value: 50000000 },
            { title: '100 Millon', value: 100000000 },
            { title: '200 Millon', value: 200000000 },
            { title: '300 Millon', value: 300000000 },
            { title: '500 Millon', value: 500000000 },
            { title: '600 Million', value: 600000000 },
            { title: '700 Million', value: 700000000 },
            { title: '800 Million', value: 800000000 },
            { title: '900 Million', value: 900000000 },
            { title: '1 Billion', value: 1000000000 },
            { title: '2 Billion', value: 2000000000 },
            { title: '5 Billion', value: 5000000000 },
            { title: '10 Billion', value: 10000000000 },
          ].map(({ title, value }, idx) => (
            <option key={idx} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select id='propertyType' name='propertyType' onChange={handleChange}>
          <option value=''>Property type</option>

          {propertyType.map(({ id, title }) => (
            <option key={id} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <article>
        <button type='submit' className='main-btn'>
          Search
        </button>
      </article>
    </form>
  );
};

export default FilterForm;
