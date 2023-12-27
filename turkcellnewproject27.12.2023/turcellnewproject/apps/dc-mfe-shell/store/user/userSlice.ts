import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  token: string;
  expireTime: number;
}

const initialState: UserState = {
  token: 'NOW_TOKEN',
  expireTime: Date.now() + 7 * 24 * 60 * 60 * 1000,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      const { token, expireTime } = action.payload;
      state.token = token;
      state.expireTime = expireTime;
    },
  },
});

export const { updateUser } = userSlice.actions;
