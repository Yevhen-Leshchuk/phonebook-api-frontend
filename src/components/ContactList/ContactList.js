import { useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import Loader from 'components/Loader';
import ContactListItem from 'components/ContactListItem';
import Filter from 'components/Filter';
import s from './ContactList.module.css';

const ContactList = () => {
  const [filter, setFilter] = useState('');

  const { data, isFetching } = useFetchContactsQuery();

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
  const showNotFoundContacts = contacts?.length === 0;

  return (
    <>
      <div className={s.contactsListBox}>
        <h2 className={s.title}>Contacts</h2>

        <Filter onChange={onChange} filter={filter} />

        <ul className={s.contactsBox}>
          {isFetching && <Loader />}
          {showNotFoundContacts && (
            <h1 className={s.error}>Contacts not found!</h1>
          )}
          {contacts &&
            contacts.map(contact => (
              <ContactListItem key={contact.id} {...contact} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
