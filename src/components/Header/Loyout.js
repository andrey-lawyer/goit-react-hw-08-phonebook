// import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import AppBar from './AppBar';
// import { GlobalStyle } from './GlobalStyle';
// import { Box } from './Box';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import AppBar from './AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      {/* <Toaster position="top-right" reverseOrder={false} />  */}
    </>
  );
};
