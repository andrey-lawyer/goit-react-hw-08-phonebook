import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './AppBar';
import { MyToast } from 'components/Toasts/MyToasts';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <MyToast />
    </>
  );
};
