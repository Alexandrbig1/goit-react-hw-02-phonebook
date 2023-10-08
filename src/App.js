import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  function onFormSubmit(contact) {
    setContacts((contacts) => [...contacts, contact]);
  }

  function onDeleteHandler(id) {
    setContacts((contact) => contact.filter((item) => item.id !== id));
  }

  function onInputHandler(e) {
    console.log(e);
  }
  // state = {
  //   contacts: "",
  //   number: "",
  // };

  // addList = (newList) => {
  //   this.setState((prevState) => {
  //     console.log(prevState);
  //   });
  // };

  return (
    <div className="container">
      <div className="wrapper" style={isOpen === true ? {} : { padding: "0" }}>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>
        {isOpen && (
          <>
            <div className="phonebook-wrapper">
              <h1>Phonebook</h1>
              <ContactForm onFormSubmit={onFormSubmit} />
            </div>

            <div className="contacts-wrapper">
              <h2>Contacts</h2>
              <Filter contacts={contacts} onInputHandler={onInputHandler} />
              <ContactList
                contacts={contacts}
                onDeleteHandler={onDeleteHandler}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
