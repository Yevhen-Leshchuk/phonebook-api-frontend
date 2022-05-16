import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};
export default ContactsPage;
