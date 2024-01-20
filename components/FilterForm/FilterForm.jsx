'use client';
import React, { useState } from 'react';
import { propertyType } from '../AllData';
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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageFilterData(formData);
  };

  return (
    <form className={styles.filterForm} onSubmit={handleSubmit}>
      <div>
        <input
          id='state'
          name='state'
          type='text'
          placeholder='State'
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          id='city'
          name='city'
          type='text'
          placeholder='City'
          onChange={handleChange}
        />
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
