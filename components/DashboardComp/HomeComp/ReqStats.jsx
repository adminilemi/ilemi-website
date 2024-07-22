'use client';
import { useGetReqStatsQuery } from '@/Api/apiSlice';
import { rents } from '@/components/AllData';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

const ReqStats = () => {
  const { authUser } = useSelector(selectUserData);
  const { data, isLoading } = useGetReqStatsQuery(authUser?.userId);

  return (
    <>
      {isLoading ? (
        <div>
          <Skeleton active block count={3} />
        </div>
      ) : (
        <ul className='flex flex-col justify-between gap-3 w-full'>
          {rents(
            data?.totalRequests,
            data?.expiredRequests,
            data?.activeRequests,
          ).map(({ id, title, subTitle, icon }) => (
            <li
              key={id}
              className='flex card py-3 px-1 gap-3 justify-between !bg-white'
            >
              <figure className='w-2/12'>
                <Image className='w-12 h-12 mx-auto' src={icon} alt='' />
              </figure>
              <div className='flex flex-col justify-between flex-1'>
                <h5 className='font-bold'>{title}</h5>
                <div>
                  <small>
                    {subTitle}

                    {/* <Link href='#' className='viewMore'>
                      {' '}
                      View more →{' '}
                    </Link> */}
                  </small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReqStats;
