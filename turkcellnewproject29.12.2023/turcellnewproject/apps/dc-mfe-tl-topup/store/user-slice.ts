import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: 'NOW_TOKEN',
  expireTime: Date.now() + 7 * 24 * 60 * 60 * 1000,
};

export const tlTopupUserSlice = createSlice({
  name: 'tlTopupUserSlice',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { token, expireTime } = action.payload;
      state.token = token;
      state.expireTime = expireTime;
    },
  },
});

export const { updateUser } = tlTopupUserSlice.actions;
export default tlTopupUserSlice.reducer;