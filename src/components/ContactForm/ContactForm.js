import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { notice, success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import {
  useFetchContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts/contactsSlice';
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

export default function ContactForm({ name, number, id }) {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  let navigate = useNavigate();

  useEffect(() => {
    setNameValue(name);
    setNumberValue(number);
  }, [name, number]);

  const [logIn, { data: user }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  const token = user?.token;

  const { data } = useFetchContactsQuery(token);
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const checkContactName = name => {
    const checkName = name.toLowerCase();

    return data?.find(contact => contact.name.toLowerCase() === checkName);
  };

  const checkContactNumber = number => {
    const checkNumber = number;

    return data?.find(contact => contact.number === checkNumber);
  };

  const showMessageSameContactName = () => {
    notice({
      text: 'This name already exists',
      width: '370px',
    });
  };

  const showMessageSameContactPhone = () => {
    notice({
      text: 'This phone already exists',
      width: '370px',
    });
  };

  const showMessageAddContact = () => {
    success({
      text: 'Contact added successfully!',
      width: '370px',
    });
  };

  const showMessageupdateContact = () => {
    success({
      text: 'Contact successfully updated!',
      width: '370px',
    });
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '', token }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const update = {
            ...values,
            id,
          };

          if (update.id !== undefined) {
            updateContact(update);
            showMessageupdateContact();
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
            showMessageAddContact();
          }
          resetForm();
        }}
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
            <span className={s.TextButton}>Save contact</span>
            {isAdding && <LoaderButton />}
          </button>
        </Form>
      </Formik>
    </>
  );
}
