// Import React, useState, and useEffect
import React, { useState, useEffect } from "react";

// Define a functional component called SelectedContact, taking selectedContactId and setSelectedContactId as props
function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // Declare a state variable called contact using useState, initialize it as null
  const [contact, setContact] = useState(null);

  // Use the useEffect hook to fetch the selected contact when selectedContactId changes
  useEffect(() => {
    // Define an async function fetchSelectedContact
    async function fetchSelectedContact() {
      try {
        // Send a fetch request to the URL derived from selectedContactId
        const response = await fetch(`${selectedContactId}`);
        // Parse the response JSON and store it in the result variable
        const result = await response.json();
        // Update the contact state with the result
        setContact(result);
      } catch (error) {
        // Handle any errors by logging them to the console
        console.error(error);
      }
    }

    // Call fetchSelectedContact function
    fetchSelectedContact();
  }, [selectedContactId]);

  // Log the selected contact to the console
  console.log("Selected Contact: ", contact);

  // Render the following JSX
  return (
    <div>
      {/* If contact exists, render the selected contact details */}
      {contact ? (
        <div>
          <h2>Selected Contact</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Close</button>
        </div>
      ) : (
        // If contact is null, render "Loading..." to indicate that the contact data is being fetched
        <div>Loading...</div>
      )}
    </div>
  );
}

// Export the SelectedContact component as the default export
export default SelectedContact;
