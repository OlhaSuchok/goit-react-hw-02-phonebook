import { ContactListItem, ContactsList } from './ContactList.styled';

export function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ContactsList>
      {contacts.map(contacts => (
        <ContactListItem key={contacts.id}>
          {' '}
          {contacts.name}: {contacts.number}
        </ContactListItem>
      ))}
    </ContactsList>
  );
}
