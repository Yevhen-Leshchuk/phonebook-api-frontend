import { useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import Loader from 'components/Loader';
import ContactListItem from 'components/ContactListItem';
import Filter from 'components/Filter';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data, error, isFetching, isError } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  const onChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const optimizedFilter = filter.toLowerCase();

    return data?.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter)
    );
  };
  const contacts = getVisibleContacts();
  const showContactData = contacts && !error;
  const showNotFoundError = isError && error.status === 404;

  return (
    <>
      <Filter onChange={onChange} filter={filter} />
      <ul>
        {isFetching && <Loader />}
        {showNotFoundError && <h1 className={s.error}>Contacts not found!</h1>}
        {showContactData &&
          contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
