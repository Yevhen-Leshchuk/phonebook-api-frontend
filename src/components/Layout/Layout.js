import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';

function ContactsViews() {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default ContactsViews;
