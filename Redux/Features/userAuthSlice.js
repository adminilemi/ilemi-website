import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authUser: {
    userId: '',
    userEmail: '',
    userName: '',
    userRole: '',
  },
  avatar: null,
  coyName: null,
  isLoggedIn: false,
  isOnboarded: false,
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

    getUserAvatar: (state, action) => {
      state.avatar = action.payload;
    },

    updateIsOnboarded: (state, action) => {
      state.isOnboarded = action.payload;
    },

    getAgentCoyName: (state, action) => {
      state.coyName = action.payload;
    },
  },
});

export const {
  userAuthData,
  getUserEmail,
  getUserAvatar,
  updateIsOnboarded,
  getAgentCoyName,
} = userAuthSlice.actions;

export const selectUserData = (state) => state.userAuthSlice;
export const selectUserName = (state) => state.userAuthSlice.coyName;
export const selectUserAvatar = (state) => state.userAuthSlice.avatar;
export const selectIsOnboarded = (state) => state.userAuthSlice.isOnboarded;

export default userAuthSlice.reducer;
