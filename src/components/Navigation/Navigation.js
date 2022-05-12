import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import s from './Navigation.module.css';

const Navigation = () => (
  <>
    <nav className={s.navBox}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="register"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Sign Up
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Sign In
      </NavLink>
      <NavLink
        to="contacts"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Contacts
      </NavLink>
    </nav>
    <UserMenu />
  </>
);

export default Navigation;
