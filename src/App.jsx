import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import { authOperations } from './redux/auth';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { Layout } from 'components/Header/Loyout';

import { Container } from 'App.styled';
import { GlobalStyle } from 'styles/GlobalStyle';

const HomePage = lazy(() => import('./page/HomePage/Homepage'));
const RegisterPage = lazy(() => import('./page/RegisterAndLogin/RegisterPage'));
const LoginPage = lazy(() => import('./page/RegisterAndLogin/LoginPage'));
const ContactsPage = lazy(() => import('./page/ContactPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#1c25cd"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  ) : (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute component={<HomePage />} />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
