import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
      state.loading = false;
      console.log('LOGGED IN');
    },
    loginFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null;
      console.log('LOGGED OUT');
    }
  }
})

export const { loginStart, loginSuccess, loginFailed, logout } = authSlice.actions
export default authSlice.reducer