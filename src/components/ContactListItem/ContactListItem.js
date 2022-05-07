import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { contactsOperations } from 'redux/contacts';
import s from './ContactListItem.module.css';

const ContactsListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const showMessagedeleteContact = () => {
    success({
      text: 'Contact successfully removed!',
      width: '370px',
    });
  };

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
    showMessagedeleteContact();
  };

  return (
    <li className={s.item} key={name}>
      {name}:<span className={s.itemNumber}>{phone}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        <span className={s.TextButton}>Delete</span>
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsListItem;
