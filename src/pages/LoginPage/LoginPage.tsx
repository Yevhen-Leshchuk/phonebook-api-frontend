import LoginForm from '../../components/LoginForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.loginPageBox}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
