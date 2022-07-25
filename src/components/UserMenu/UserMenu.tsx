import { useDispatch, useSelector } from 'react-redux';
import { useLogOutMutation } from '../../redux/auth/authSlice';
import { authApi } from '../../redux/auth/authSlice';
import { contactApi } from '../../redux/contacts/contactsSlice';
import { loggedOut } from '../../redux/auth/userDataReducer';
import { getUserName } from '../../redux/auth/userDataSelectors';
import userImg from '../../images/hacker.png';
import { ReactComponent as Logout } from '../../images/logout.svg';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUserName);
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
          // @ts-ignore
          logOut();
          dispatch(authApi.util.resetApiState());
          dispatch(contactApi.util.resetApiState());
          // @ts-ignore
          dispatch(loggedOut());
        }}
      >
        <Logout className={s.logoutImg} />
      </button>
    </div>
  );
};

export default UserMenu;
