import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { notice } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
  phone: Yup.string().min(7, 'must be 7 characters long').required('Required'),
});

export default function ContactForm() {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const onSubmit = values => dispatch(contactsOperations.addContact(values));

  const checkContactName = name => {
    const checkName = name.toLowerCase();

    return contacts.find(contact => contact.name.toLowerCase() === checkName);
  };

  const checkContactNumber = phone => {
    const checkNumber = phone;
    console.log(checkNumber);

    return contacts.find(contact => contact.phone === checkNumber);
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

  return (
    <>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (checkContactName(values.name)) {
            showMessageSameContactName();
            return;
          }

          if (checkContactNumber(values.phone)) {
            showMessageSameContactPhone();
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
            Phone
          </label>
          <Field
            className={s.input}
            type="tel"
            name="phone"
            placeholder="Phone"
            id={numberInputId}
          />
          <p className={s.error}>
            <ErrorMessage name="phone" />
          </p>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
