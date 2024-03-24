import React from 'react';
import AddGifBanner from '../AddGifBanner';
import { images } from '@/exports/images';
import { MdCall } from 'react-icons/md';
import { FiPlayCircle } from 'react-icons/fi';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { formatNumInThousands } from '@/utils/ReUseAblefunctions';

export const PropDeetsAside = ({
  styles,
  PropertyType,
  MonthlyRent,
  WhatsappNumber,
  phoneNumber,
}) => {
  return (
    <main>
      <section className={`${styles.applyNow} card p-3 mb-4`}>
        <div>
          <small> {PropertyType} Price </small>
          <h3 className='viewMore'>
            ₦{formatNumInThousands(MonthlyRent)} <span>/Yearly</span>{' '}
          </h3>

          <a
            href={`https://wa.me/${WhatsappNumber}`}
            className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
          >
            {' '}
            <FaWhatsapp size={20} />
            <span>{WhatsappNumber}</span>
          </a>
          {/* <a
            href={`https://wa.me/${WhatsappNumber}`}
            className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
          >
            {' '}
            <LuClipboardList size={20} />
            <span>Apply Now</span>
          </a> */}
        </div>

        <hr />

        <div className='mt-3'>
          <h4> Request a home tour</h4>

          <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center mt-3'>
            <div className='col-12 col-lg-5'>
              <button
                className={`${styles.selected}  d-flex gap-2 align-items-center  justify-content-center col-12 `}
              >
                {' '}
                <BiHomeAlt2 size={20} /> In Person
              </button>
            </div>
            <div className='col-12 col-lg-5 mt-2 mt-lg-0'>
              <button
                className={`${styles.selected}  d-flex gap-2 align-items-center  justify-content-center col-12`}
              >
                <FiPlayCircle size={20} /> Virtual
              </button>
            </div>
          </div>

          <div className='col-12 mt-3'>
            {/* <ReactDatePicker
                      className='form-control'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      /> */}

            <input type='date' className='form-control' />
          </div>

          <a
            href={`tel: ${phoneNumber}`}
            className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
          >
            {' '}
            <MdCall size={20} />
            <span>{phoneNumber}</span>
          </a>
          {/* <a
            href={`tel: ${phoneNumber}`}
            className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
          >
            {' '}
            <MdShareLocation size={20} />
            <span>Request a tour</span>
          </a> */}
        </div>
      </section>
      <section className='safetyTips'>
        <h4 className='text-center my-2'> Rental Tips</h4>
        <ol>
          <li>
            Do not make any payment for inspection till you meet with the
            Property Agent.
          </li>
          <li>
            Only pay Rental fee, Sales fee or any upfront payment after you
            verify the Landlord.
          </li>
          <li>
            Only make Payments , deposits or other Sales or Rental fees after
            you have met with the property owners or their representatives and
            have agreed terms. .
          </li>
          <li>
            Ensure you met the Property Agent at an open location and preferably
            in company of someone else.
          </li>
          <li>
            Property4u is not liable for any agreement or financial transactions
            reached by parties involved.
          </li>
          <li>Always insist on a receipt for all payments made.</li>
        </ol>
      </section>
      <section>
        <AddGifBanner images={images.sidebarAdGif} />
        <AddGifBanner images={images.sidebarAdGif} />
      </section>
    </main>
  );
};
