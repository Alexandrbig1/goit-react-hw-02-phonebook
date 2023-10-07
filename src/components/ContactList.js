function ContactList({ contacts, onDeleteHandler }) {
  return (
    <ul className="contact-menu">
      <List contacts={contacts} onDeleteHandler={onDeleteHandler} />
    </ul>
  );
}

function List({ contacts, onDeleteHandler }) {
  return (
    <>
      {contacts.map(({ contact, phoneNumber }) => (
        <li key={contact} className="contact-list">
          <p>
            {contact}: <span>{phoneNumber}</span>
          </p>
          <button onClick={() => onDeleteHandler(contact)}>Delete</button>
        </li>
      ))}
    </>
  );
}

export default ContactList;
