import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
// import ContactsEditPage from 'pages/ContactsEditPage /ContactsEditPage ';

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
    'pages/ContactsEditPage /ContactsEditPage ' /* webpackChunkName: "ContactsEditPage" */
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="contacts-update" element={<ContactsEditPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
