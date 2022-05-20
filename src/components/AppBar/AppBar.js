import Container from 'components/Container';
import Navigation from 'components/Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
export default AppBar;
