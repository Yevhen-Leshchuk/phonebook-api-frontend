import { nanoid } from 'nanoid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, changeFilter };

export default actions;
