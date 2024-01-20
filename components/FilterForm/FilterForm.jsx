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

          {[2000, 11000, 21000, 31000].map((item, idx) => (
            <option key={idx} value={item}>
              {formatNumInThousands(item)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select id='maxPrice' name='maxPrice' onChange={handleChange}>
          <option value=''>Max Price</option>

          {[10000, 20000, 30000, 40000].map((item, idx) => (
            <option key={idx} value={item}>
              {formatNumInThousands(item)}
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
