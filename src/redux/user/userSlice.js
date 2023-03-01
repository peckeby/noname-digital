import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: null,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: {
      reducer(state, action) {
        state.email = action.payload;
      },
    },
    setPassWord: {
      reducer(state, action) {
        state.password = action.payload;
      },
    },
    setError: {
      reducer(state, _) {
        state.error = true;
      },
    },
  },
});

export const { setEmail, setError, setPassWord } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
