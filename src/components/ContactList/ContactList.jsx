import { ContactListItem, ContactsList } from './ContactList.styled';

export function ContactList({ contacts, filter }) {
  console.log(contacts);
  return (
    <ContactsList>
      {filter
        ? filter.map(filter => (
            <ContactListItem key={filter.id}>
              {filter.name}: {filter.number}
            </ContactListItem>
          ))
        : contacts.map(contacts => (
            <ContactListItem key={contacts.id}>
              {contacts.name}: {contacts.number}
            </ContactListItem>
          ))}
    </ContactsList>
  );
}
