import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

const userDatasSlice = createSlice({
  name: 'userDatas',
  initialState,
  reducers: {
    getCurrentUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { getCurrentUserData } = userDatasSlice.actions;

export const selectCurrentUserData = (state) => state.userDatasSlice.userData;

export default userDatasSlice.reducer;
