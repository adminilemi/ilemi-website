'use client';

import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';
const GoBack = ({ className }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={` ${className} flex items-center gap-2 !py-[px] !px-2 mt-4  outline-btn  `}
    >
      {' '}
      <FaChevronLeft />
      Go Back
    </button>
  );
};
export default GoBack;
