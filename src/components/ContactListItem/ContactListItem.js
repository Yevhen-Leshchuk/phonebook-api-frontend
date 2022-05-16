import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { success } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';
import { useLogInMutation } from 'redux/auth/authSlice';
import { updateContact } from 'redux/contacts/updateContactReducer';
import LoaderButton from 'components/LoaderButton';
import s from './ContactListItem.module.css';

const ContactsListItem = ({ name, number, id }) => {
  const [logIn, { data: user }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  let navigate = useNavigate();
  const token = user?.token;
  const { data } = useFetchContactsQuery(token);
  const dispatch = useDispatch();
  const deleteValues = {
    id,
    token,
  };

  // const getUserById = id => {
  //   return data.find(contact => contact.id === id);
  // };

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const showMessagedeleteContact = () => {
    success({
      text: 'Contact successfully removed!',
      width: '370px',
    });
  };

  return (
    <li className={s.item} key={name}>
      {name}:<span className={s.itemNumber}>{number}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          deleteContact(deleteValues);
          showMessagedeleteContact();
        }}
        disabled={isDeleting}
      >
        <span className={s.TextButton}>Delete</span>
        {isDeleting && <LoaderButton />}
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(updateContact(id));
          navigate('/contacts-update');
        }}
      >
        <span className={s.TextButton}>Edit</span>
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
