import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { notice } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
// import contacts from './components/Filter/contacts.json';

class App extends Component {
  state = {
    contacts: [],
    // contacts: contacts,
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const { name, number } = data;

    if (this.checkContactName(name) || this.checkContactNumber(number)) {
      this.showMessageSameContact();
      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  checkContactName(name) {
    const checkName = name.toLowerCase();

    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === checkName
    );
  }

  checkContactNumber(number) {
    const checkNumber = Number(number);

    return this.state.contacts.find(
      ({ number }) => Number(number) === checkNumber
    );
  }

  formSubmitHandler = data => {
    console.log(data);
    this.setState({
      contacts: data.contacts,
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  showMessageSameContact = () => {
    return notice({
      text: 'This name already exists ',
      width: '370px',
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            data={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
