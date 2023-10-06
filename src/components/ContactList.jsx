const ContactList = () => {
  return (
    <ul className="contact-menu">
      <li className="contact-list">
        {/* {lalala.map((item) => (
          <ListText lalaa={lalala} />
        ))} */}
        <p>
          John Doe: <span>123 45 6789</span>
        </p>
        <button>Delete</button>
      </li>
    </ul>
  );
};

// function ListText(props) {
//   return (
//     <p>
//       Contact name: <span>777-12-12</span>
//     </p>
//   );
// }

export default ContactList;
