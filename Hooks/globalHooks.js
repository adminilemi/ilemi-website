import { toggleShow } from '@/Redux/Features/globalSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const useGlobalHooks = () => {
  const [toggle, setToggle] = useState(false);

  const btnTaps = () => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 300);
  };

  const handleToggle = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  const dispatch = useDispatch();

  const handleShow = (id) => {
    dispatch(toggleShow(id));
  };

  return { handleShow, handleToggle, toggle, setToggle, btnTaps };
};
