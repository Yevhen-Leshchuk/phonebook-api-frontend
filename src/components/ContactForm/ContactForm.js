import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { notice } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import actions from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
  number: Yup.string().min(7, 'must be 7 characters long').required('Required'),
});

export default function ContactForm() {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = values => dispatch(actions.addContact(values));

  const checkContactName = name => {
    const checkName = name.toLowerCase();

    return contacts.find(contact => contact.name.toLowerCase() === checkName);
  };

  const checkContactNumber = number => {
    const checkNumber = Number(number);

    return contacts.find(contact => Number(contact.number) === checkNumber);
  };

  const showMessageSameContact = name => {
    return contacts.map(contact =>
      contact.name === name
        ? notice({
            text: 'This name already exists ',
            width: '370px',
          })
        : notice({
            text: 'This number already exists ',
            width: '370px',
          })
    );
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (
            checkContactName(values.name) ||
            checkContactNumber(values.number)
          ) {
            showMessageSameContact(values.name);
            return;
          }
          onSubmit(values);
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
            Number
          </label>
          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Number"
            id={numberInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="number" />
          </p>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
