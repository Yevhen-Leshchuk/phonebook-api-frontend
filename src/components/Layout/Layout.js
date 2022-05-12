import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Container from 'components/Container';
import s from './Layout.module.css';

function ContactsViews() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default ContactsViews;
