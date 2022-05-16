import { NavLink } from 'react-router-dom';
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
        to="contacts"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Contacts
      </NavLink>
      <NavLink
        to="contacts-update"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Edit Contact
      </NavLink>
    </nav>
  </>
);

export default Navigation;
