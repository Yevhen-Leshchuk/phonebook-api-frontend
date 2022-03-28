import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { notice } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;

    if (checkContactName(name) || checkContactNumber(number)) {
      showMessageSameContact(name);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    setContacts([newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const checkContactName = name => {
    const checkName = name.toLowerCase();

    return contacts.find(contact => contact.name.toLowerCase() === checkName);
  };

  const checkContactNumber = number => {
    const checkNumber = Number(number);

    return contacts.find(contact => Number(contact.number) === checkNumber);
  };

  const changeFilter = event => {
    const filterValue = event.currentTarget.value;
    setFilter(filterValue);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const showMessageSameContact = name => {
    return contacts.map(contact =>
      contact.name === name
        ? notice({
            text: 'This name already exists ',
            width: '370px',
          })
        : notice({
            text: 'This number already exists ',
            width: '370px',
          })
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList data={visibleContacts} onDeleteContact={deleteContact} />
      </Section>
    </Container>
  );
}

export default App;
