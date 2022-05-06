import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getMessageError,
} from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getMessageError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {error && contacts.length === 0 && (
        <h1 className={s.error}>Contacts not found!</h1>
      )}
      <ul>
        {contacts.map(({ name, phone, id }) => (
          <li className={s.item} key={name}>
            {name}:<span className={s.itemNumber}>{phone}</span>
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
