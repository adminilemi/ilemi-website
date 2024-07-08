import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authUser: {
    userId: '',
    userEmail: '',
    userName: '',
    userRole: '',
  },

  userEmail: '',
};

export const userAuthSlice = createSlice({
  name: 'userDatas',
  initialState: initialState,

  reducers: {
    userAuthData: (state, action) => {
      state.authUser = action.payload;
    },

    getUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const { userAuthData, getUserEmail } = userAuthSlice.actions;

export const selectUserData = (state) => state.userAuthSlice;

export default userAuthSlice.reducer;
