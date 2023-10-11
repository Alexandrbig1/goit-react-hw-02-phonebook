export default function List({ contact, id, phoneNumber, onDeleteHandler }) {
  return (
    <li className="contact-list">
      <p>
        {contact}: <span>{phoneNumber}</span>
      </p>
      <button onClick={() => onDeleteHandler(id)}>Delete</button>
    </li>
  );
}
