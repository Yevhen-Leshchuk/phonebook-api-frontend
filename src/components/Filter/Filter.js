import React from 'react';
import s from './Filter.module.css';

export default function Filter({ onChange, filter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        placeholder="Find contacts by name"
        onChange={onChange}
      />
    </label>
  );
}
