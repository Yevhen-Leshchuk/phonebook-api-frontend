import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from 'redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        placeholder="Find contacts by name"
        onChange={onChange}
      />
    </label>
  );
}
