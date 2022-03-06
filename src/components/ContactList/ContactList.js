import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const Contacts = ({ data, onDeleteContact }) => {
  return (
    <>
      <ul>
        {data.map(({ name, number, id }) => (
          <li className={s.item} key={name}>
            {name}:<span className={s.itemNumber}>{number}</span>
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
};

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
