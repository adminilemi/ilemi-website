// import { toggleShow } from '@/Redux/Features/globalSlice';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const useGlobalHooks = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const btnTaps = () => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 300);
  };

  const handleToggle = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  // const dispatch = useDispatch();

  // const handleShow = (id) => {
  //   dispatch(toggleShow(id));
  // };

  const getCreationDate = (date) => {
    // conver date string to proper date object by using: new Date()
    const jobDate = new Date(date);
    //  get current date
    const currentDate = new Date();
    // get the difference between the twodates
    const dateDifference = currentDate - jobDate;

    // Calculate the time difference in seconds, minutes, hours, and days
    const secondsDifference = Math.floor(dateDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    let message = '';

    if (daysDifference > 0) {
      message = `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (hoursDifference > 0) {
      message = `${hoursDifference} hour${
        hoursDifference !== 1 ? 's' : ''
      } ago`;
    } else if (minutesDifference > 0) {
      message = `${minutesDifference} minute${
        minutesDifference !== 1 ? 's' : ''
      } ago`;
    } else {
      message = `${secondsDifference} second${
        secondsDifference !== 1 ? 's' : ''
      } ago`;
    }
    return message;
  };

  const formatNumInThousands = (val) => {
    if (typeof val !== 'number' || isNaN(val)) {
      return 'Invalid Number';
    }

    return val >= 1000 ? val.toLocaleString() : val;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based, so add 1
    const year = date.getFullYear();

    const datePart = `${day}/${month}/${year}`;

    return datePart;
  };

  return {
    // handleShow,
    formatDate,
    getCreationDate,
    formatNumInThousands,
    handleToggle,
    toggle,
    setToggle,
    btnTaps,
    loading,
    setLoading,
  };
};
