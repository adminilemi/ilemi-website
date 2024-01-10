import { createSlice } from '@reduxjs/toolkit';

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState: { email: null },

  reducers: {
    requestEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { requestEmail } = forgotPasswordSlice.actions;

export const selectEmail = (state) => state.forgotPasswordSlice;

export default forgotPasswordSlice.reducer;
