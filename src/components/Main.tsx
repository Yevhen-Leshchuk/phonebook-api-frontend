import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from './Layout';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useFetchCurrentUserQuery } from '../redux/auth/authSlice';
import {
  actionUser,
  actionToken,
  loggedOn,
} from '../redux/auth/userDataReducer';
import { getToken } from '../redux/auth/userDataSelectors';

const HomePage = lazy(
  () => import('../pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);

const RegistrationPage = lazy(
  () =>
    import(
      '../pages/RegistrationPage/RegistrationPage' /* webpackChunkName: "RegistrationPage"*/
    )
);

const LoginPage = lazy(
  () =>
    import('../pages/LoginPage/LoginPage' /* webpackChunkName: "LoginPage" */)
);

const ContactsPage = lazy(
  () =>
    import(
      '../pages/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */
    )
);

const ContactsEditPage = lazy(
  () =>
    import(
      '../pages/ContactsEditPage /ContactsEditPage' /* webpackChunkName: "ContactsEditPage" */
    )
);

function Main(): JSX.Element {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const { data: user, isFetching } = useFetchCurrentUserQuery(token, {
    skip: token === '',
  });

  useEffect(() => {
    if (token === '' || !user) {
      return;
    }

    dispatch(actionToken(token));
    dispatch(actionUser(user));
    // @ts-ignore
    dispatch(loggedOn());
  }, [dispatch, user, token]);
  // @ts-ignore
  return (
    !isFetching && (
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted redirectTo="/login">
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="contacts-update"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsEditPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default Main;
