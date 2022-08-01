import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useLogInMutation } from '../../redux/auth/authSlice';
import {
  showMessageWelcomeUser,
  showMessageErrorLoginUser,
} from '../Notification/Notification';
import {
  actionToken,
  actionUser,
  loggedOn,
} from '../../redux/auth/userDataReducer';
import LoaderButton from '../LoaderButton';
import IInitValues from '../../interfaces/InitValues.intarface';
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
  const dispatch = useDispatch();

  const [logIn, { isLoading: isloggingIn }] = useLogInMutation();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onLogin = async (values: IInitValues) => {
    // @ts-ignore
    const { data } = await logIn(values);

    if (data) {
      dispatch(actionToken(data.token));
      dispatch(actionUser(data.user));
      // @ts-ignore
      dispatch(loggedOn());

      showMessageWelcomeUser();
    } else {
      showMessageErrorLoginUser();
    }
  };

  const onSubmit = (
    values: IInitValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
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
          <button className={s.button} type="submit">
            <span className={s.TextButton}>Submit</span>
            {isloggingIn && <LoaderButton />}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
