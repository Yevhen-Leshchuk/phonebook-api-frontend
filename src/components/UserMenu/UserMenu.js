import { useLogInMutation, useLogOutMutation } from 'redux/auth/authSlice';
import { authApi } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const [logIn, data] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  const token = data.data.token;
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();

  return (
    <div className={s.userBox}>
      <p className={s.userName}>Name</p>
      <button
        className={s.LogoutBtn}
        type="submit"
        onClick={() => {
          logOut(token);
          dispatch(authApi.util.resetApiState());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
