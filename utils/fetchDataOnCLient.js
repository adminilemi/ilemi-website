'use client';

import useSWR from 'swr';
import { getPropByType } from '@/Api/Apis';

export const useClientFetch = (val) => {
  const { data, error, isValidating, isLoading, mutate } = useSWR(
    'getProperties',
    () => getPropByType(val),
  );

  return { data, error, isValidating, isLoading, refetch: mutate };
};
