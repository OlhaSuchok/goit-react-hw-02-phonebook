import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import { ContactFormTitle } from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = contact => {
    const newContact = { ...contact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        <Box
          p={30}
          bg="secondary"
          border="2px solid"
          borderColor="border"
          borderRadius={8}
        >
          <ContactFormTitle>PhoneBook</ContactFormTitle>
          <ContactForm onHandleSubmit={this.handleSubmit} />
          <ContactFilter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 && <ContactFormTitle>Contacts</ContactFormTitle>}
          {contacts.length > 0 && <ContactList contacts={contacts} />}
        </Box>
      </div>
    );
  }
}
