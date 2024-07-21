import React from 'react';
import './ListingInfo.scss';
import { useSelector } from 'react-redux';
import {
  addListingInfo,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import { formatNumInThousands } from '@/utils/ReUseAblefunctions';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { createTenantRequest } from '@/Api/Apis';
import Spinner from '@/spinner/Spinner';
import { selectUserData } from '@/Redux/Features/userAuthSlice';

const ListingReview = ({ onPrevious }) => {
  const { listingInfo, Amenities, address } = useSelector(selectProperty);
  const { authUser } = useSelector(selectUserData);
  const { handleError, loading, setLoading } = useGlobalHooks();

  const previewData = {
    purpose: [
      {
        title: 'Property Purpose',
        value: listingInfo?.purpose,
      },
      {
        title: 'SQM/Square Feets',
        value: listingInfo?.squareFeet,
      },
    ],
    PropertyInformations: [
      {
        title: 'Property Type:',
        value: listingInfo?.propertyType,
      },
      {
        title: 'Property Sub Type:',
        value: listingInfo?.propertySubtype,
      },
      {
        title: 'Bedrooms:',
        value: listingInfo?.bedrooms,
      },
      {
        title: 'Baths:',
        value: listingInfo?.bathrooms,
      },
      {
        title: 'Toilets:',
        value: listingInfo?.toilets,
      },
    ],
    Location: [
      {
        title: 'State:',
        value: address?.state,
      },
      {
        title: 'City:',
        value: address?.lga,
      },
      {
        title: 'Post Duration:',
        value: address?.postingDuration,
      },
      {
        title: 'Amount:',
        value: `₦${formatNumInThousands(Number(address?.amount))}`,
      },
      {
        title: 'Payment Type:',
        value: `/${address?.amountDuration}`,
      },
    ],
  };

  const handleSubmit = async () => {
    setLoading({ ['create']: true });
    try {
      const rsp = await createTenantRequest({
        TenantId: authUser?.userId,
        ...listingInfo,
        ...address,
        amenities: Amenities,
      });
      setLoading({ ['create']: false });
      console.log(rsp);
    } catch (error) {
      setLoading({ ['create']: false });
      console.log(error);
    }
  };

  return (
    <section className='mb-5 listingInfo card py-3 px-6 divide-y '>
      <ul className='py-3 flex gap-5 '>
        {previewData?.purpose.map(({ title, value }) => (
          <li key={title} className=' '>
            <h4 className='mb-3 !text-sm text-grey-100 font-semibold '>
              {title}
            </h4>
            <p className='text-xs text-grey-300 font-semibold '>{value}</p>
          </li>
        ))}
      </ul>
      <article className='py-3'>
        <h6 className='font-semibold text-sm'>Property Informations</h6>
        <ul className=' flex flex-wrap justify-between gap-y-5 mt-5 w-full'>
          {previewData?.PropertyInformations.map(({ title, value }) => (
            <li
              key={title}
              className='flex items-center justify-between w-full md:w-5/12'
            >
              <h4 className=' !text-sm text-grey-100 font-semibold '>
                {title}
              </h4>
              <p className='text-xs text-grey-300 font-semibold '>{value}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className='py-3'>
        <h6 className='font-semibold text-sm'>Location and Pricing</h6>
        <ul className=' flex flex-wrap justify-between gap-y-5 mt-5 w-full'>
          {previewData?.Location.map(({ title, value }) => (
            <li
              key={title}
              className='flex items-center justify-between w-full md:w-5/12'
            >
              <h4 className=' !text-sm text-grey-100 font-semibold '>
                {title}
              </h4>
              <p className='text-xs text-grey-300 font-semibold '>{value}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className='py-3'>
        <h6 className='font-semibold text-sm'>Amenities</h6>
        <ul className=' flex flex-col justify-between gap-5 mt-5 w-full'>
          {Amenities.map(({ title }) => (
            <li key={title} className=''>
              <h4 className=' !text-sm text-grey-100 font-semibold '>
                {title}
              </h4>
            </li>
          ))}
        </ul>
      </article>

      <article className='flex gap-3 justify-end mt-5 pt-5'>
        <button
          onClick={onPrevious}
          className='outline-btn bg-[#F7F7FD] !text-mainColor !border-0'
          type='button'
        >
          Previous{' '}
        </button>
        <button className='main-btn' type='button' onClick={handleSubmit}>
          {' '}
          {loading['create'] ? <Spinner /> : 'Submit'}{' '}
        </button>
      </article>
    </section>
  );
};

export default ListingReview;
