import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);

const RegistrationPage = lazy(() =>
  import(
    'pages/RegistrationPage/RegistrationPage' /* webpackChunkName: "RegistrationPage"*/
  )
);

const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage' /* webpackChunkName: "LoginPage" */)
);

const ContactsPage = lazy(() =>
  import(
    'pages/ContactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */
  )
);

const ContactsEditPage = lazy(() =>
  import(
    'pages/ContactsEditPage /ContactsEditPage' /* webpackChunkName: "ContactsEditPage" */
  )
);

function App() {
  return (
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
  );
}

export default App;
