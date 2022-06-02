import { CSSTransition } from 'react-transition-group';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <CSSTransition
            in={true}
            appear
            timeout={500}
            classNames={s}
            unmountOnExit
          >
            <Navigation />
          </CSSTransition>
        </Container>
      </header>
    </>
  );
};

export default AppBar;
