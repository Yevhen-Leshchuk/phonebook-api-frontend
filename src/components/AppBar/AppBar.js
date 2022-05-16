import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useLogInMutation } from 'redux/auth/authSlice';
import s from './AppBar.module.css';

const AppBar = () => {
  const [logIn, { isSuccess }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });

  return (
    <header className={s.header}>
      <Navigation />
      {isSuccess ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
