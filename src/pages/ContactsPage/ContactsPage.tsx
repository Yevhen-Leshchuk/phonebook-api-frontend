import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={s.contactsBox}>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <ContactList />
      </Section>
    </div>
  );
};
export default ContactsPage;
