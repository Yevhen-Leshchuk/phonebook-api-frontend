import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useLogInMutation } from 'redux/auth/authSlice';
import s from './ContactsEditPage.module.css';

const ContactsEditPage = () => {
  const navigate = useNavigate();
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

    const getUserById = userId => {
      return data?.find(contact => contact.id === userId);
    };

    const updateUser = getUserById(userId);
    setUserUpdate(updateUser);

    return () => {
      setUserUpdate(null);
    };
  }, [data]);

  return (
    <>
      <div className={s.contactFormBox}>
        <Section>
          <ContactForm {...userupdate} />
        </Section>
      </div>
      <button
        className={s.goBackBtn}
        type="button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
};
export default ContactsEditPage;
