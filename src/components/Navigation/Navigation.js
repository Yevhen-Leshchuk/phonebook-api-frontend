import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLogInMutation } from 'redux/auth/authSlice';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import s from './Navigation.module.css';

const Navigation = () => {
  const [logIn, { isSuccess }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  console.log(logIn);
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

          {isSuccess && (
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

        {isSuccess ? <UserMenu /> : <AuthNav />}
      </nav>
    </>
  );
};

export default Navigation;
