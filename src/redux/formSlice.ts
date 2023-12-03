import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    uncontrolledFormData: {},
    controlledFormData: {},
    countries: [],
  },
  reducers: {
    setUncontrolledFormData: (state, action) => {
      state.uncontrolledFormData = action.payload;
    },
    setControlledFormData: (state, action) => {
      state.controlledFormData = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { setUncontrolledFormData, setControlledFormData, setCountries } =
  formSlice.actions;

export default formSlice.reducer;
