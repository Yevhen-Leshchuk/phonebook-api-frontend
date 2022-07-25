import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import { updateContact } from '../../redux/contacts/updateContactReducer';
import { showMessageDeleteContact } from '../Notification/Notification';
import Loader from '../Loader';
import s from './ContactListItem.module.css';

interface Props {
  name: string;
  number: string;
  id: string;
}

const ContactsListItem = ({ name, number, id }: Props) => {
  let navigate = useNavigate();

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const dispatch = useDispatch();

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
            deleteContact(id);
            showMessageDeleteContact();
          }}
          disabled={isDeleting}
        >
          <span className={s.textButton}>Delete</span>
          {isDeleting && <Loader />}
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

export default ContactsListItem;
