import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.authNav}>
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
    </div>
  );
};

export default AuthNav;
