import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
   // Define a function handleRowClick to handle the row click event
  const handleRowClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={handleRowClick} style={{ cursor: "pointer" }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

