import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="phonebook-wrapper">
          <h1>Phonebook</h1>
          <ContactForm />
        </div>

        <div className="contacts-wrapper">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
