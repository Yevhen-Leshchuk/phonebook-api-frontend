import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader';
import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const error = useSelector(contactsSelectors.getMessageError);
  const isLoading = useSelector(contactsSelectors.getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <Loader />}
      {error && contacts.length === 0 && (
        <h1 className={s.error}>Contacts not found!</h1>
      )}
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
