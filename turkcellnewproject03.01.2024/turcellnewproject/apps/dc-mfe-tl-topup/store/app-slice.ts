import { createSlice } from '@reduxjs/toolkit';

const initialAppState = {
  currentStep: 1,
  currentType: 'TL',
  currentAmount: 0,
  captcha: false,
  displayCaptcha: true,
};

export const tlTopupAppSlice = createSlice({
  name: 'tlTopupAppSlice',
  initialState: initialAppState,
  reducers: {
    setCurrentType: (state, action) => {
      state.currentType = action.payload;
    },
    goToNextStep: (state) => {
      if (state.currentStep < 3) {
        state.currentStep += 1;
      }
    },
    goToPrevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    setCurrentAmount: (state, action) => {
      state.currentAmount = action.payload;
    },
    setCaptcha: (state, action) => {
      state.captcha = action.payload;
    },
    setDisplayCaptcha: (state, action) => {
      state.displayCaptcha = action.payload;
    },
  },
});

export const {
  setCaptcha,
  setCurrentAmount,
  setCurrentType,
  goToNextStep,
  goToPrevStep,
  setDisplayCaptcha,
} = tlTopupAppSlice.actions;
