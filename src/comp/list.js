import React, { useState } from "react";
import data from "../mock-data.json";
import Table from "react-bootstrap/Table";
import { nanoid } from "nanoid";

const List = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    credit: "",
    year: "",
    shortDescription: "",
    courseCode: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      credit: addFormData.credit,
      year: addFormData.year,
      shortDescription: addFormData.shortDescription,
      courseCode: addFormData.courseCode,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  
  return (
    <div className="Table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Credit</th>
            <th>Year</th>
            <th>Short Description</th>
            <th>Course Code</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key="{i}">
              <td>{contact.name}</td>
              <td>{contact.credit}</td>
              <td>{contact.year}</td>
              <td>{contact.shortDescription}</td>
              <td>{contact.courseCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Add a contact</h2>

      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Skriv in namn"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="credit"
          required="required"
          placeholder="Skriv in credit"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="year"
          required="required"
          placeholder="Skriv in år"
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="shortDescription"
          required="required"
          placeholder="Skriv in beskrivning"
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="courseCode"
          required="required"
          placeholder="Skriv in kurskod"
          onChange={handleAddFormChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default List;
