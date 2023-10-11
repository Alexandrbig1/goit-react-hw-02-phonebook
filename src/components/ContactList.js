import List from "./List";

export default function ContactList({
  contacts,
  onDeleteHandler,
  filteredContacts,
  searchTerm,
}) {
  return (
    <ul className="contact-menu">
      {filteredContacts.length === 0 && searchTerm.length > 0 ? (
        <li className="contact-list">No matching contacts found</li>
      ) : filteredContacts.length > 0 ? (
        filteredContacts.map(({ contact, phoneNumber, id }) => (
          <List
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
            onDeleteHandler={onDeleteHandler}
          />
        ))
      ) : contacts.length !== 0 ? (
        contacts.map(({ contact, phoneNumber, id }) => (
          <List
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
            onDeleteHandler={onDeleteHandler}
          />
        ))
      ) : (
        ""
      )}
    </ul>
  );
}
