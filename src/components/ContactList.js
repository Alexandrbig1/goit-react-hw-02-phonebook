const ContactList = () => {
  return (
    <ul className="contact-menu">
      <List />
    </ul>
  );
};

function List() {
  return (
    <>
      <li className="contact-list">
        {/* {lalala.map((item) => (
          <ListText lalaa={lalala} />
        ))} */}
        <p>
          John Doe: <span>123 45 6789</span>
        </p>
        <button>Delete</button>
      </li>
      <li className="contact-list">
        {/* {lalala.map((item) => (
          <ListText lalaa={lalala} />
        ))} */}
        <p>
          Alex Cardo: <span>123 45 6789</span>
        </p>
        <button>Delete</button>
      </li>
    </>
  );
}

// function ListText(props) {
//   return (
//     <p>
//       Contact name: <span>777-12-12</span>
//     </p>
//   );
// }

export default ContactList;
