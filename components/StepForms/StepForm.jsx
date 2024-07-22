'use client';

import React, { useState } from 'react';
import StepFormLabel from './StepFormLabel';

import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from 'react-icons/tb';
import PropertyAddress from './PropertyAddress/PropertyAddress';
import ListingInfo from './ListingInfo/ListingInfo';
import Amenities from './Amenities/Amenities';
import ListingReview from './ListingReview/ListingReview';

function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    { title: 'Property Information', icon: <TbSquareRoundedNumber1Filled /> },
    { title: 'Property Location', icon: <TbSquareRoundedNumber2Filled /> },
    { title: 'Amenities', icon: <TbSquareRoundedNumber2Filled /> },
    { title: 'Review', icon: <TbSquareRoundedNumber3Filled /> },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const data = [
    { comp: <ListingInfo onPrevious={handlePrevious} onNext={handleNext} /> },
    {
      comp: <PropertyAddress onPrevious={handlePrevious} onNext={handleNext} />,
    },
    { comp: <Amenities onPrevious={handlePrevious} onNext={handleNext} /> },
    { comp: <ListingReview onPrevious={handlePrevious} onNext={handleNext} /> },
  ];

  return (
    <section className='flex flex-col  justify-between mt-5'>
      <article className='w-full lg:w-7/12 mx-auto mb-5 border-bottom'>
        <div className=''>
          <StepFormLabel stepLabels={StepLabels} currentStep={currentStep} />
        </div>
      </article>
      <article className='w-full lg:w-7/12 mx-auto'>
        {data.map(
          ({ comp }, idx) =>
            currentStep === idx && (
              <React.Fragment key={idx}>{comp}</React.Fragment>
            ),
        )}
      </article>
    </section>
  );
}

export default StepForm;
