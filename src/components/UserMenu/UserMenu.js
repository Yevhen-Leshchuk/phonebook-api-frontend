import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.userBox}>
      <p className={s.userName}>Name</p>
      <button className={s.LogoutBtn} type="submit">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
