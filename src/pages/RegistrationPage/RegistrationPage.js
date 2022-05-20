import RegistrationForm from 'components/RegistrationForm';
import s from './RegistrationPage.module.css';

const AuthPage = () => {
  return (
    <div className={s.authPageBox}>
      <RegistrationForm />
    </div>
  );
};

export default AuthPage;
