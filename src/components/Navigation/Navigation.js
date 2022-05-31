import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getIsLogged } from 'redux/auth/userDataSelectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLogged = useSelector(getIsLogged);

  const location = useLocation();
  const showEditContactLink = location.pathname === '/contacts-update';

  return (
    <>
      <nav className={s.navBox}>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            Home
          </NavLink>

          {isLogged && (
            <NavLink
              to="contacts"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              Contacts
            </NavLink>
          )}

          <NavLink
            to="contacts-update"
            className={({ isActive }) =>
              isActive ? `${s.activeLink}` : `${s.link}`
            }
          >
            {showEditContactLink && 'Edit Contact'}
          </NavLink>
        </div>

        {isLogged ? <UserMenu /> : <AuthNav />}
      </nav>
    </>
  );
};

export default Navigation;
