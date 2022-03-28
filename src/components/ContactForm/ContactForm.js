import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(10, 'must  be no more than 10 characters long')
    .required('Required'),
  number: Yup.string().min(7, 'must be 7 characters long').required('Required'),
});

class ContactForm extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();
  render() {
    return (
      <>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            this.props.onSubmit(values);
            resetForm();
          }}
        >
          <Form className={s.form}>
            <label className={s.nameLabel} htmlFor={this.nameInputId}>
              Name
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Name"
              id={this.nameInputId}
            />
            <p className={s.error}>
              <ErrorMessage name="name" />
            </p>

            <label className={s.label} htmlFor={this.numberInputId}>
              Number
            </label>
            <Field
              className={s.input}
              type="tel"
              name="number"
              placeholder="Number"
              id={this.numberInputId}
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
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
