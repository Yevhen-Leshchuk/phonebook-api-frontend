import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
import Loader from '../Loader';
import ContactListItem from '../ContactListItem';
import Filter from '../Filter';
import plug from '../../images/error.png';
import s from './ContactList.module.css';

const ContactList = () => {
  const [filter, setFilter] = useState('');

  const { data: userContacts, isFetching } = useFetchContactsQuery();

  const onChange = (filter: string) => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    const optimizedFilter = filter.toLowerCase();

    return userContacts?.filter(contact =>
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
        {isFetching && <Loader />}
        {showNotFoundContacts && (
          <div className={s.plugImageBox}>
            <h1 className={s.error}>Contacts not found!</h1>
            <img className={s.plugImage} src={plug} alt="Movies not found" />
          </div>
        )}

        <TransitionGroup component="ul" className={s.contactsBox}>
          {contacts &&
            contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames={s}>
                <ContactListItem {...contact} id={contact.id} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default ContactList;
