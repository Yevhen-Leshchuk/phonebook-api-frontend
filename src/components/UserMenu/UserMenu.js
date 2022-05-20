import { useLogInMutation, useLogOutMutation } from 'redux/auth/authSlice';
import { authApi } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import userImg from '../../images/user.png';
import { ReactComponent as Logout } from '../../images/logout.svg';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const [logIn, data] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });

  const token = data?.data?.token;
  const name = data?.data?.user?.name;
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();

  return (
    <div className={s.userBox}>
      <div className={s.userImageBox}>
        <img src={userImg} alt="avatar" className={s.userImage} />
      </div>
      <p className={s.userName}>{name}</p>
      <button
        className={s.logoutBtn}
        type="submit"
        onClick={() => {
          logOut(token);
          dispatch(authApi.util.resetApiState());
        }}
      >
        <Logout className={s.logoutImg} />
      </button>
    </div>
  );
};

export default UserMenu;
