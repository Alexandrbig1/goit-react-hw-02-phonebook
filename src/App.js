import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  function onFormSubmit(contact) {
    setContacts((contacts) => [...contacts, contact]);
  }

  function onDeleteHandler(contactName) {}
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
      <div className="wrapper">
        <div className="phonebook-wrapper">
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={onFormSubmit} />
        </div>

        <div className="contacts-wrapper">
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} onDeleteHandler={onDeleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
