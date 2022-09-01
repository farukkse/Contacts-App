import { useState, useEffect } from "react";
import './styles.css';
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "foruk",
      phone_number: 12312321,
    },
    {
      fullname: "ali",
      phone_number: 5445456,
    },
    {
      fullname: "ensar",
      phone_number: 6116611,
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
