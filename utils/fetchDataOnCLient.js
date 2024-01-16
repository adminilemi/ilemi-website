'use client';

import useSWR from 'swr';
import { useMyContext } from '@/utils/ContextProvider';
import { getPropByType } from '@/Api/Apis';

// export const TestData = () => {
//   const { state } = useMyContext();
//   return state;
// };

const baseUrl = 'https://ile-mi-app.onrender.com';

const rentEndpoint = `${baseUrl}/property/special-filter/property-special-filter`;

// export const getPropByType = async (formData) => {
//   try {
//     const rentData = await fetch(rentEndpoint, {
//       method: 'POST',
//       body: JSON.stringify(formData),
//       headers: {
//         'content-type': 'application/json',
//       },
//     });

//     const result = await rentData.json();

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const useClientFetch = (val) => {
  const { data, error, isValidating, isLoading } = useSWR('getProperties', () =>
    getPropByType(val),
  );

  return { data, error, isValidating, isLoading };
};
