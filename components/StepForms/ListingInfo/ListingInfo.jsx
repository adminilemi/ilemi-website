import React, { useState } from 'react';
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
import {
  bedAndCo,
  propertyCategories,
  propertySubType,
  propertyType,
} from '@/components/AllData';

const ListingInfo = ({ onNext }) => {
  const { listingInfo } = useSelector(selectProperty);

  const [selectValues, setSelectValues] = useState(
    listingInfo || {
      purpose: '',
      yearBuilt: '',
      propertySubtype: '',
      propertyType: '',
      bedrooms: '',
      bathrooms: '',
      toilets: '',
      squareFeet: '',
    },
  );

  const [customOptions, setCustomOptions] = useState({
    propertyType: listingInfo?.propertyType || null,
    propertySubtype: listingInfo?.propertySubtype || null,
  });

  const { errors, setErrors } = useGlobalHooks();

  const dispatch = useDispatch();

  // For Select comp
  const handleOnSelectChange = (id, val) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectValues.propertyType === '') {
      setErrors({
        error: true,
        errMessage: 'Please Select Property type',
      });
      return;
    }

    if (selectValues.propertySubtype === '') {
      setErrors({
        error: true,
        errMessage:
          'Please Select Property categories; e.g Rent, Sell, Buy etc',
      });
      return;
    }

    setErrors({ error: false, errMessage: '' });

    dispatch(addListingInfo(selectValues));

    onNext();
  };

  return (
    <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
      <section className='flex flex-col justify-between card p-4'>
        <article className='w-full mb-4 flex flex-wrap justify-between gap-3'>
          <div className='inputWrapper'>
            {' '}
            <label htmlFor='purpose' className='labelTitle '>
              {' '}
              Property Purpose <em>*</em>{' '}
            </label>
            <select
              id='purpose'
              name='purpose'
              className='form-control !mt-3 '
              defaultValue={selectValues.purpose}
              onChange={(e) => handleOnSelectChange('purpose', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                Select Purpose
              </option>
              {propertyCategories.map(({ id, title }) => (
                <option value={title} key={id}>
                  {' '}
                  {title}{' '}
                </option>
              ))}
            </select>{' '}
          </div>
          <div className='inputWrapper'>
            <label htmlFor='yearBuilt' className='labelTitle'>
              {' '}
              Year Built <em>*</em>
            </label>
            <input
              id='yearBuilt'
              name='yearBuilt'
              type='number'
              placeholder='example: 128, 0r 169.56'
              className={'form-control'}
              defaultValue={selectValues.yearBuilt}
              onChange={(e) =>
                handleOnSelectChange('yearBuilt', e.target.value)
              }
            />{' '}
          </div>
        </article>
        <article className='w-full flex flex-wrap justify-between gap-2 '>
          <div className='inputWrapper'>
            <label htmlFor='propertyType' className='labelTitle'>
              {' '}
              Property Type <em>*</em>{' '}
            </label>

            <Select
              id='propertyType'
              options={propertyType}
              selectedOption={customOptions.propertyType}
              setSelectedOption={setCustomOptions}
              onSelectChange={handleOnSelectChange}
              errors={errors}
            />
          </div>
          <div className='inputWrapper'>
            <label htmlFor='propertySubtype' className='labelTitle'>
              {' '}
              Property Sub Type <em>*</em>{' '}
            </label>

            <Select
              id='propertySubtype'
              options={propertySubType}
              selectedOption={customOptions.propertySubtype}
              setSelectedOption={setCustomOptions}
              onSelectChange={handleOnSelectChange}
              errors={errors}
            />
          </div>
        </article>

        <article className='w-full flex flex-col md:flex-row gap-1 justify-between mt-3'>
          <div className='inputWrapper '>
            <label htmlFor='BedRooms' className='labelTitle'>
              {' '}
              Bedrooms <em>*</em>
            </label>
            <select
              id='bedrooms'
              name='bedrooms'
              className='form-control'
              defaultValue={selectValues.bedrooms}
              onChange={(e) => handleOnSelectChange('bedrooms', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many Bed
              </option>

              {bedAndCo.map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='Baths' className='labelTitle'>
              {' '}
              Baths <em>*</em>
            </label>
            <select
              id='bathrooms'
              name='bathrooms'
              className='form-control'
              defaultValue={selectValues.bathrooms}
              onChange={(e) =>
                handleOnSelectChange('bathrooms', e.target.value)
              }
              required
            >
              <option value='' disabled>
                {' '}
                How many baths
              </option>
              {bedAndCo.map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>
          <div className=' inputWrapper'>
            <label htmlFor='Baths' className='labelTitle'>
              {' '}
              Toilets <em>*</em>
            </label>
            <select
              id='toilets'
              name='toilets'
              className='form-control'
              defaultValue={selectValues.toilets}
              onChange={(e) => handleOnSelectChange('toilets', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many toilets
              </option>
              {bedAndCo.map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>
        </article>

        <article className='inputWrapper mt-3'>
          <label htmlFor='SquareFoot' className='labelTitle'>
            {' '}
            Square Feet
          </label>
          <input
            id='squareFeet'
            name='squareFeet'
            type='number'
            placeholder='example: 128, 0r 169.56'
            className={'form-control'}
            defaultValue={selectValues.squareFeet}
            onChange={(e) => handleOnSelectChange('squareFeet', e.target.value)}
          />
        </article>
      </section>
      <section className='w-full text-end mt-2'>
        <button className='main-btn' type='submit'>
          Next
        </button>
      </section>

      <div className='flex justify-center'>
        {errors.error && <ErrorMessage message={errors.errMessage} />}
      </div>
    </form>
  );
};

export default ListingInfo;
