import s from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div>
      <h2>Sign In to PhoneBook</h2>
      <form>
        <label>
          Email
          <input type="text" name="email" placeholder="Mail"></input>
          <label>
            Password
            <input type="text" name="passwod" placeholder="Password"></input>
          </label>
        </label>
      </form>
    </div>
  );
};

export default LoginForm;
