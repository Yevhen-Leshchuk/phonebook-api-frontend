import { useState, useEffect } from 'react';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useLogInMutation } from 'redux/auth/authSlice';
import s from './ContactsEditPage .module.css';

const ContactsEditPage = () => {
  const [userupdate, setUserUpdate] = useState(null);
  const [logIn, { data: user }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  const token = user?.token;

  const { data } = useFetchContactsQuery(token);

  useEffect(() => {
    const persistStorage = localStorage.getItem('persist:updateContact');
    const parsedSettings = JSON.parse(persistStorage);
    const userId = parsedSettings.id.replace(/^"|"$/g, '');

    // if (userupdate?.id !== userId) {
    //   return;
    // }

    const getUserById = userId => {
      return data?.find(contact => contact.id === userId);
    };

    const updateUser = getUserById(userId);
    setUserUpdate(updateUser);

    return () => {
      setUserUpdate(null);
    };
  });

  return (
    <>
      <Section title="Phonebook">
        <ContactForm {...userupdate} />
      </Section>
    </>
  );
};
export default ContactsEditPage;
