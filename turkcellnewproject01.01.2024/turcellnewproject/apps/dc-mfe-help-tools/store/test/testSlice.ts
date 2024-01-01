import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
export const test = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
