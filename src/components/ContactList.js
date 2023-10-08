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
      {contacts.map(({ contact, phoneNumber, id }) => {
        return (
          <li key={id} className="contact-list" id={id}>
            <p>
              {contact}: <span>{phoneNumber}</span>
            </p>
            <button onClick={() => onDeleteHandler(id)}>Delete</button>
          </li>
        );
      })}
    </>
  );
}

export default ContactList;
