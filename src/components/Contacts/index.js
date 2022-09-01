import { useState, useEffect } from "react";
import './styles.css';
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ömer Faruk Köse",
      phone_number: 543801,
    },
    {
      fullname: "Elif Işıkhan",
      phone_number: 5445456,
    },
    {
      fullname: "Ensar Hayıroğlu",
      phone_number: 616161,
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
    <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
