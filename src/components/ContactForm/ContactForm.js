import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  useFetchContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts/contactsSlice';
import {
  showMessageSameContactName,
  showMessageSameContactPhone,
  showMessageAddContact,
  showMessageUpdateContact,
} from 'components/Notification/Notification';
import { useLogInMutation } from 'redux/auth/authSlice';
import LoaderButton from 'components/LoaderButton';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
  number: Yup.string()
    .min(7, 'must be 7 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
});

export default function ContactForm({ id }) {
  let navigate = useNavigate();
  const [logIn, { data: user }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  console.log(logIn);
  const token = user?.token;
  const { data } = useFetchContactsQuery(token);
  const [addContact, { data: addedUser, isLoading: isAdding }] =
    useAddContactMutation();
  const [updateContact, { originalArgs }] = useUpdateContactMutation();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  useEffect(() => {
    if (!addedUser) {
      return;
    }

    showMessageAddContact();
  }, [addedUser]);

  useEffect(() => {
    if (!originalArgs) {
      return;
    }

    showMessageUpdateContact();
  }, [originalArgs]);

  const checkContactName = name => {
    const checkName = name.toLowerCase();

    return data?.find(contact => contact.name.toLowerCase() === checkName);
  };

  const checkContactNumber = number => {
    const checkNumber = number;

    return data?.find(contact => contact.number === checkNumber);
  };

  const initialValues = {
    name: '',
    number: '',
    token,
  };

  const onSubmit = (values, { resetForm }) => {
    const update = {
      ...values,
      id,
    };

    if (update.id !== undefined) {
      updateContact(update);
      navigate('/contacts');
      resetForm();
    } else {
      if (checkContactName(values.name)) {
        showMessageSameContactName();
        return;
      }

      if (checkContactNumber(values.number)) {
        showMessageSameContactPhone();
        return;
      }

      addContact(values);
    }
    resetForm();
  };

  return (
    <div className={s.contactFormBox}>
      <h2 className={s.title}>Phonebook</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
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
          <label className={s.label} htmlFor={numberInputId}>
            Phone
          </label>

          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Phone"
            id={numberInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="number" />
          </p>
          <button className={s.button} type="submit" disabled={isAdding}>
            <span className={s.textButton}>Save contact</span>
            {isAdding && <LoaderButton />}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

ContactForm.propTypes = {
  id: PropTypes.string,
};
