import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { useLogInMutation } from 'redux/auth/authSlice';
import { updateContact } from 'redux/contacts/updateContactReducer';
import { showMessageDeleteContact } from 'components/Notification/Notification';
import LoaderButton from 'components/LoaderButton';
import s from './ContactListItem.module.css';

const ContactsListItem = ({ name, number, id }) => {
  let navigate = useNavigate();
  const [logIn, { data: user }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });

  const token = user?.token;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const deleteValues = {
    id,
    token,
  };

  return (
    <li className={s.item} key={name}>
      <div>
        <p className={s.titleName}> Name:</p>
        <p className={s.titleNumber}>Number:</p>
      </div>
      <div>
        <p className={s.itemName}> {name}</p>
        <p className={s.itemNumber}>{number}</p>
      </div>

      <div className={s.contactsListItemButtonBox}>
        <button
          className={s.button}
          type="button"
          onClick={() => {
            deleteContact(deleteValues);
            showMessageDeleteContact();
          }}
          disabled={isDeleting}
        >
          <span className={s.textButton}>Delete</span>
          {isDeleting && <LoaderButton />}
        </button>
        <button
          className={s.buttonEdit}
          type="button"
          onClick={() => {
            dispatch(updateContact(id));
            navigate('/contacts-update');
          }}
        >
          <span className={s.textButton}>Edit</span>
        </button>
      </div>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
