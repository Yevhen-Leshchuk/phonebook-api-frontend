import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
import { getUserId } from '../../redux/contacts/contactSelectors';
import IContacts from '../../interfaces/Contacts.interface';
import s from './ContactsEditPage.module.css';

const initialValuesUpdateUser = {
  id: '',
  name: '',
  number: '',
};

const ContactsEditPage = () => {
  const navigate = useNavigate();
  const userId = useSelector(getUserId);

  const [userupdate, setUserUpdate] = useState<IContacts | undefined>(
    initialValuesUpdateUser
  );

  const { data: contacts } = useFetchContactsQuery();
  console.log('editPage');

  useEffect(() => {
    const getUserById = (userId: string) => {
      return contacts?.find(contact => contact.id === userId);
    };

    const updateUser = getUserById(userId);
    setUserUpdate(updateUser);

    return () => {
      setUserUpdate(initialValuesUpdateUser);
    };
  }, [contacts, userId]);

  return (
    <>
      <div className={s.contactFormBox}>
        <Section>
          <ContactForm id={userupdate?.id} />
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
