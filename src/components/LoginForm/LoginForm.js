import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useLogInMutation } from 'redux/auth/authSlice';
import {
  showMessageWelcomeUser,
  showMessageErrorLoginUser,
} from 'components/Notification/Notification';
import LoaderButton from 'components/LoaderButton';
import s from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [logIn, { isLoading: isloggingIn }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onLogin = async values => {
    const response = await logIn(values);
    if (response?.data) {
      showMessageWelcomeUser();
    } else {
      showMessageErrorLoginUser();
    }
  };

  const onSubmit = (values, { resetForm }) => {
    onLogin(values);
    resetForm();
  };

  return (
    <div className={s.formBox}>
      <h2 className={s.formTitle}>
        Sign In to <span className={s.formTitleAccent}>PHONEBOOK</span>
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form} noValidate>
          <label className={s.label} htmlFor={emailInputId}>
            Email
          </label>
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Mail"
            id={emailInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="email" />
          </p>

          <label className={s.label} htmlFor={passwordInputId}>
            Password
          </label>
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="password"
            id={passwordInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="password" />
          </p>
          <button className={s.button} type="submit" disabled={null}>
            <span className={s.TextButton}>Submit</span>
            {isloggingIn && <LoaderButton />}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
