import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { loadState, saveState } from './sessionStorage';

const preloadedState = loadState();

export  const store = configureStore({
  reducer: {
    auth: authReducer,
  } as any,
  preloadedState
})

store.subscribe(()=>{
  saveState(store.getState());
})