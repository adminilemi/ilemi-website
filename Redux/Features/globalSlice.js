import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  searchQuery: '',
  changePasswordLink: '',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,

  reducers: {
    toggleShow: (state, action) => {
      // Toggle icon state based on the IDs
      const id = action.payload;
      return {
        ...state,
        [id]: !state[id],
      };
    },

    increment: (state, action) => {
      state.count = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    updateLink: (state, action) => {
      state.changePasswordLink = action.payload;
    },
  },
});

export const { toggleShow, increment, setSearchQuery, updateLink } =
  globalSlice.actions;

export const selectGlobal = (state) => state.globalSlice;
export const selectSearch = (state) => state.globalSlice.searchQuery;
export const selectChangePasswordLink = (state) =>
  state.globalSlice.changePasswordLink;
export default globalSlice.reducer;
