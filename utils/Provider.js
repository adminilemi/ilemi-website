'use client';

import store from '@/Redux/store/store';
import { Provider } from 'react-redux';

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
