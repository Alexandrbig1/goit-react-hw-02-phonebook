import { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();

    const newValue = { contact, phoneNumber };

    if (!contact || !phoneNumber) {
      return;
    }

    alert(JSON.stringify(newValue));

    setContact("");
    setPhoneNumber("");
  }

  return (
    <form onSubmit={HandleSubmit} className="contact-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        placeholder="123 45 6789"
        value={phoneNumber}
        onChange={(e) =>
          setPhoneNumber(
            typeof e.target.value === "string"
              ? e.target.value
              : +e.target.value
          )
        }
        required
      />
      <button className="contact-btn">Add contact</button>
    </form>
  );
};

export default ContactForm;
