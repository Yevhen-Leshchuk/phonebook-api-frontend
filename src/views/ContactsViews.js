import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Section from 'components/Section';

function ContactsViews() {
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
}

export default ContactsViews;
