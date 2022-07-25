import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  useFetchContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} from '../../redux/contacts/contactsSlice';
import {
  showMessageSameContactName,
  showMessageSameContactPhone,
  showMessageAddContact,
  showMessageUpdateContact,
} from '../../components/Notification/Notification';
import Loader from '../Loader';
import IInitValues from '../../interfaces/InitValues.intarface';
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

interface Props {
  id?: string | undefined;
}

export default function ContactForm({ id }: Props) {
  let navigate = useNavigate();

  const { data: contacts } = useFetchContactsQuery();

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

  const checkContactName = (name: string) => {
    const checkName = name.toLowerCase();
    return contacts?.find(contact => contact.name.toLowerCase() === checkName);
  };

  const checkContactNumber = (number: string) => {
    const checkNumber = number;

    return contacts?.find(contact => contact.number === checkNumber);
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const onSubmit = (
    values: IInitValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
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
            {isAdding && <Loader />}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
