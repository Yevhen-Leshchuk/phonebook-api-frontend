import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import s from './Layout.module.css';

function Layout() {
  return (
    <div className={s.layout}>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
