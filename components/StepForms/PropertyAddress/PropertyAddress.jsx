import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PropertyAddress.scss';

import {
  addAddress,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import allState from '@/components/nigeria-state-and-lgas.json';
import { paymentType } from '@/components/AllData';

const initialState = {
  postingDuration: '',
  amountDuration: '',
  state: '',
  lga: '',
  amount: '',
};

const PropertyAddress = ({ onNext, onPrevious }) => {
  const { address } = useSelector(selectProperty);
  const [getLga, setGetLga] = useState([]);

  const [propData, setPropData] = useState(address || initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(propData));

    onNext();
  };

  useEffect(() => {
    if (propData?.state !== '') {
      const lgaData = allState.find((s) => s?.state === propData?.state);

      setGetLga(lgaData?.lgas);
    }
  }, [propData?.state]);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col listingAddress '>
      <section className='flex flex-col justify-between card p-4'>
        <article className='w-full flex flex-col md:flex-row gap-1 justify-between mt-3'>
          <div className=' inputWrapper'>
            <label htmlFor='State' className='labelTitle'>
              {' '}
              State <em>*</em>
            </label>
            <select
              id='state'
              name='state'
              className='form-control'
              defaultValue={propData.state}
              onChange={handleChange}
              required
            >
              <option value='' disabled>
                {' '}
                Select State
              </option>
              {allState.map(({ state }) => (
                <option value={state} key={state}>
                  {' '}
                  {state}{' '}
                </option>
              ))}
            </select>
          </div>{' '}
          <div className='inputWrapper '>
            <label htmlFor='City' className='labelTitle'>
              {' '}
              Locality<em>*</em>
            </label>
            <select
              id='lga'
              name='lga'
              className='form-control'
              defaultValue={propData.lga}
              onChange={handleChange}
              required
            >
              <option value='' disabled>
                {' '}
                LGA
              </option>

              {getLga?.map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>
          <div className=' inputWrapper'>
            <label htmlFor='postingDuration' className='labelTitle'>
              {' '}
              Posting Duration <em>*</em>{' '}
            </label>
            <select
              id='postingDuration'
              name='postingDuration'
              className='form-control'
              defaultValue={propData.postingDuration}
              onChange={handleChange}
              required
            >
              <option value='' disabled>
                {' '}
                Select Duration
              </option>
              {['6 Months', '12 Months', '2 Years', '3 Years'].map(
                (item, idx) => (
                  <option value={item} key={idx}>
                    {' '}
                    {item}{' '}
                  </option>
                ),
              )}
            </select>
          </div>
        </article>

        <ul className='flex flex-wrap justify-between gap-2 mt-3'>
          <li className='inputWrapper'>
            <label htmlFor='amount' className='labelTitle'>
              Amount <em>*</em>
            </label>
            <div className='rentPay form-control !flex flex-row items-center gap-2'>
              <h4 className=''> ₦ </h4>
              <input
                id='amount'
                name='amount'
                type='number'
                className='flex-1'
                defaultValue={propData.amount}
                onChange={handleChange}
                required
              />
            </div>
          </li>
          <li className='inputWrapper'>
            <label htmlFor='amountDuration' className='labelTitle'>
              Payment Type
              <em>*</em>
            </label>

            <select
              id='amountDuration'
              name='amountDuration'
              type='number'
              className='form-control !bg-transparent'
              defaultValue={propData.amountDuration}
              onChange={handleChange}
              required
            >
              <option value=''> Select Payment type</option>
              {paymentType.map(({ title, id }) => (
                <option value={title} key={id}>
                  {' '}
                  {title}{' '}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </section>
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
    </form>
  );
};

export default PropertyAddress;
