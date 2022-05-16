import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useLogInMutation } from 'redux/auth/authSlice';
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
  const [logIn, { isLoading: isAdding }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return (
    <div className={s.formBox}>
      <h2 className={s.formTitle}>
        Sign In to <span className={s.formTitleAccent}>PHONEBOOK</span>
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // if (checkContactName(values.name)) {
          //   showMessageSameContactName();
          //   return;
          // }

          // if (checkContactNumber(values.phone)) {
          //   showMessageSameContactPhone();
          //   return;
          // }

          logIn(values);
          // showMessageAddContact();
          resetForm();
        }}
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
            {/* {isAdding && <LoaderButton />} */}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
