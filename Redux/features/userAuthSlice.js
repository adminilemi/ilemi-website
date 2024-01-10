import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
  name: 'buyerDatas',
  initialState: {
    userData: null,
  },

  reducers: {
    buyerSignUpData: (state, action) => {
      state.userData = action.payload;
    },

    merchantSignUpData: (state, action) => {
      state.userData = action.payload;
    },

    currentUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { buyerSignUpData, currentUserData, merchantSignUpData } =
  userAuthSlice.actions;

export const selectUserData = (state) => state.userAuthSlice;

export default userAuthSlice.reducer;
