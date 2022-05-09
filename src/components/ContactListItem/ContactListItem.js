import PropTypes from 'prop-types';
import { success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import LoaderButton from 'components/LoaderButton';
import s from './ContactListItem.module.css';

const ContactsListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const showMessagedeleteContact = () => {
    success({
      text: 'Contact successfully removed!',
      width: '370px',
    });
  };

  return (
    <li className={s.item} key={name}>
      {name}:<span className={s.itemNumber}>{phone}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          deleteContact(id);
          showMessagedeleteContact();
        }}
        disabled={isDeleting}
      >
        <span className={s.TextButton}>Delete</span>
        {isDeleting && <LoaderButton />}
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
