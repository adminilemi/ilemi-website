import React from 'react';
import { propertyType } from '../AllData';
import styles from './FilterForm.module.scss';

const FilterForm = () => {
  return (
    <form className={styles.filterForm}>
      <div>
        <input id='State' name='State' type='text' placeholder='State' />
      </div>
      <div>
        <input id='State' name='State' type='text' placeholder='City' />
      </div>
      <div>
        <select>
          <option value='2,000 - 10,000'>₦2,000 - 10,000</option>
          <option value='2,000 - 10,000'>₦11,000 - 20,000</option>
          <option value='2,000 - 10,000'>₦21,000 - 30,000</option>
          <option value='2,000 - 10,000'>₦31,000 - 40,000</option>
        </select>
      </div>
      <div>
        <select>
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
