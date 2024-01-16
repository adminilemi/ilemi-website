'use client';
// src/MyContext.js
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
} from 'react';

const MyContext = createContext();

// Reducers

const searchData = (state, action) => {
  switch (action.type) {
    case 'RENT':
      return { ...state, rent: action.payload };

    case 'SELL':
      return { ...state, sell: action.payload };

    case 'BUY':
      return { ...state, buy: action.payload };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  // const storedData = JSON.parse(localStorage.getItem('ilemiAppData'));

  const initialData = { rent: null, sell: null, buy: null };
  const [searchDataState, searchDataDispatch] = useReducer(
    searchData,
    initialData,
  );

  const state = {
    search: searchDataState,
  };

  // useEffect(() => {
  //   // Save the combined state to local storage whenever it changes
  //   localStorage.setItem('ilemiAppData', JSON.stringify(state));
  // }, [state]);

  return (
    <MyContext.Provider value={{ state, searchDataDispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
