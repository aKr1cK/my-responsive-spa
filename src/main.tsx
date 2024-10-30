import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { store } from "./store/store.ts";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from './context/GlobalProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <ToastContainer></ToastContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </StrictMode>
);
