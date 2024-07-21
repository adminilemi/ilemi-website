import React from 'react';
import './logout.css';
import { deleteSession } from '@/libs/session';
import PopUp from '@/components/popUps/PopUp';

const Logout = ({ id, close }) => {
  const logoutUser = async () => {
    await deleteSession();
    localStorage.clear();
    location.replace('/');
  };

  return (
    <div className='container-logout  '>
      <PopUp id={id}>
        <div className='logout  '>
          <h1>Log Out?</h1>
          <p>Are you sure you want to Log out of your account?</p>
          <div className='buttons'>
            <button type='button' className='outline-dark' onClick={close}>
              Cancel
            </button>
            <button className='main-btn log' type='button' onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default Logout;
