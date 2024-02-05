import React from 'react';
import AddGifBanner from '../AddGifBanner';
import { images } from '@/exports/images';
import { MdShareLocation } from 'react-icons/md';
import { FiPlayCircle } from 'react-icons/fi';
import { BiHomeAlt2 } from 'react-icons/bi';
import { LuClipboardList } from 'react-icons/lu';
import { useGlobalHooks } from '@/Hooks/globalHooks';

export const PropDeetsAside = ({
  styles,
  PropertyType,
  MonthlyRent,
  WhatsappNumber,
  phoneNumber,
}) => {
  const { formatNumInThousands } = useGlobalHooks();
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
            <LuClipboardList size={20} />
            <span>Apply Now</span>
          </a>
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
            <MdShareLocation size={20} />
            <span>Request a tour</span>
          </a>
        </div>
      </section>
      <section className='safetyTips'>
        <h4 className='text-center my-2'> Safety Tips</h4>
        <ol>
          <li>
            Do not make any inspection fee without seeing the agent and
            property.
          </li>
          <li>
            Only pay Rental fee, Sales fee or any upfront payment after you
            verify the Landlord.
          </li>
          <li>Ensure you meet the Agent in an open location.</li>
          <li>
            The Agent does not represent PropertyPro and PropertyPro is not
            liable for any monetary transaction between you and the Agent.
          </li>
        </ol>
      </section>
      <section>
        <AddGifBanner images={images.sidebarAdGif} />
        <AddGifBanner images={images.sidebarAdGif} />
      </section>
    </main>
  );
};
