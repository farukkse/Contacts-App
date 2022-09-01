import { useState, useEffect } from "react";


const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContacts, contacts }) {
  const [form, setform] = useState(initialFormValues);

  useEffect(() => {
    setform(initialFormValues);
  }, [contacts]);
  const onChangeInput = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContacts([...contacts, form]);
  };
  return (
    <form onClick={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
