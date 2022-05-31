import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useRegisterMutation } from 'redux/auth/authSlice';
import {
  showMessageRegisterUser,
  showMessageErrorRegisterUser,
} from 'components/Notification/Notification';
import LoaderButton from 'components/LoaderButton';
import s from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  let navigate = useNavigate();
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const [register, { data, error, isLoading: isAdding }] =
    useRegisterMutation();

  useEffect(() => {
    if (!data) {
      return;
    }
    navigate('/login');
    showMessageRegisterUser();
  }, [data, navigate]);

  useEffect(() => {
    if (!error?.status) {
      return;
    }
    showMessageErrorRegisterUser();
  }, [error?.status]);

  const onSubmit = (values, { resetForm }) => {
    register(values);
    resetForm();
  };

  return (
    <div className={s.formBox}>
      <h2 className={s.formTitle}>
        Sign Up to <span className={s.formTitleAccent}>PHONEBOOK</span>
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form} noValidate>
          <label className={s.nameLabel} htmlFor={nameInputId}>
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Name"
            id={nameInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="name" />
          </p>

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
            <span className={s.textButton}>Submit</span>
            {isAdding && <LoaderButton />}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
