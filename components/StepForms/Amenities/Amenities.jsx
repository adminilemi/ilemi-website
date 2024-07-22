import React, { useEffect, useState } from 'react';
import './ListingInfo.scss';
import Select from '../../Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAmenities,
  addListingInfo,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';

import ErrorMessage from '@/components/ErrorMessage';
import { amenitiesList } from '@/components/AllData';

const Amenities = ({ onNext, onPrevious }) => {
  const { Amenities, listingInfo } = useSelector(selectProperty);

  const [selectValues, setSelectValues] = useState(
    listingInfo || {
      Description: '',
    },
  );

  const [amenities, setAmenities] = useState(Amenities || []);
  const [amenitiesData, setAmenitiesData] = useState(amenitiesList);
  const [moreAmenities, setMoreAmenities] = useState('');

  const { errors, setErrors } = useGlobalHooks();

  const dispatch = useDispatch();

  const today = new Date().toISOString().split('T')[0];

  // For Select comp
  const handleOnSelectChange = (id, val) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const updateAmenities = (idx, val) => {
    // Check to see if the item selected is already in the state array
    const isItemInState = amenities.some((item) => item.title === val.title);

    if (isItemInState) {
      // IF item available, remove it
      setAmenities((prev) => prev.filter((item) => item.title !== val.title));
    } else {
      // Add it to the state rray

      setAmenities((prevState) => [
        ...prevState,
        {
          title: val.title,
        },
      ]);
    }
  };

  const addMore = (e) => {
    e.preventDefault();
    if (moreAmenities) {
      // Update the main array
      setAmenitiesData((prev) => [...prev, { title: moreAmenities }]);
      setAmenities((prev) => [...prev, { title: moreAmenities }]);

      setMoreAmenities('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectValues.PropertyType === '') {
      setErrors({
        error: true,
        errMessage: 'Please Select Property type',
      });
      return;
    }

    if (selectValues.PropertySubType === '') {
      setErrors({
        error: true,
        errMessage:
          'Please Select Property categories; e.g Rent, Sell, Buy etc',
      });
      return;
    }

    setErrors({ error: false, errMessage: '' });

    dispatch(addAmenities(amenities));
    dispatch(addListingInfo(selectValues));

    onNext();
  };

  useEffect(() => {
    if (Amenities) {
      setAmenitiesData((prev) => {
        const combinedData = [...prev, ...Amenities];

        // Filer out duplicate values on index
        const uniqueVal = combinedData.filter(
          (item, idx, self) =>
            idx === self.findIndex((x) => x.title === item.title),
        );

        return uniqueVal;
      });
    }
  }, [Amenities]);

  return (
    <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
      <ul className='flex flex-col justify-between card p-4'>
        <li className='w-full flex flex-col'>
          <label htmlFor='Description' className='labelTitle'>
            {' '}
            Description
          </label>

          <textarea
            id='Description'
            name='Description'
            placeholder='Enter  desciption'
            className='form-control'
            defaultValue={selectValues.Description}
            onChange={(e) =>
              handleOnSelectChange('Description', e.target.value)
            }
            rows='3'
            required
          ></textarea>
        </li>

        <li>
          <article className='w-full flex flex-col my-4'>
            <label htmlFor='Amenities' className='labelTitle mb-2'>
              {' '}
              Select Amenitites
            </label>
            <div className='Amenities flex flex-wrap gap-2 '>
              {amenitiesData.map((item, idx) => (
                <small
                  onClick={() => updateAmenities(idx, item)}
                  className={
                    amenities.some((s) => s.title === item.title)
                      ? 'selected'
                      : 'notSelected'
                  }
                  key={idx}
                >
                  {' '}
                  {item.title}{' '}
                </small>
              ))}
            </div>
          </article>

          <article className='w-full flex flex-col'>
            <label htmlFor='addMore' className='labelTitle'>
              {' '}
              We miss an amenity? Add it below
            </label>

            <div className='!flex items-center justify-between card '>
              <input
                id='addMore'
                name='addMore'
                placeholder='Others'
                className='flex-1 !mt-0 !py-[.6em] !pl-2'
                value={moreAmenities}
                onChange={(e) => setMoreAmenities(e.target.value)}
              />
              <div>
                <button className='main-btn' onClick={addMore}>
                  {' '}
                  Add
                </button>
              </div>
            </div>
          </article>
        </li>
      </ul>
      <section className='flex gap-3 justify-end mt-5'>
        <button
          onClick={onPrevious}
          className='outline-btn bg-[#F7F7FD] !text-mainColor !border-0'
          type='button'
        >
          Previous{' '}
        </button>
        <button className='main-btn' type='submit'>
          {' '}
          Next{' '}
        </button>
      </section>

      <div className='flex justify-center'>
        {errors.error && <ErrorMessage message={errors.errMessage} />}
      </div>
    </form>
  );
};

export default Amenities;
