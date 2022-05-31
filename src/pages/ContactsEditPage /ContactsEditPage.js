import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { getUserId } from 'redux/contacts/contactSelectors';
import s from './ContactsEditPage.module.css';

const ContactsEditPage = () => {
  const navigate = useNavigate();
  const userId = useSelector(getUserId);

  const [userupdate, setUserUpdate] = useState(null);

  const { data } = useFetchContactsQuery();

  useEffect(() => {
    const getUserById = userId => {
      return data?.find(contact => contact.id === userId);
    };

    const updateUser = getUserById(userId);
    setUserUpdate(updateUser);

    return () => {
      setUserUpdate(null);
    };
  }, [data, userId]);

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
