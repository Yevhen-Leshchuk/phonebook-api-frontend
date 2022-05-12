import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div>
      <h2>Sign Up to PhoneBook</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label>
          Email
          <input type="text" name="email" placeholder="Mail" />
        </label>
        <label>
          Password
          <input type="text" name="password" placeholder="Password" />
        </label>
      </form>
    </div>
  );
};

export default RegistrationForm;
