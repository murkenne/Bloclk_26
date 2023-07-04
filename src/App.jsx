import  './App.css';
import { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      if (selectedContactId) {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      }
    };

    fetchContact();
  }, [selectedContactId]);

  console.log(contact); // Check the fetched contact data in the console

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  return (
    <>
      {selectedContactId ? (
        <div>
          <div>Selected Contact:</div>
          {contact ? (
            <>
              <div>Name: {contact.name}</div>
              <div>Email: {contact.email}</div>
              <div>Phone: {contact.phone}</div>
            </>
          ) : (
            <div>Loading contact...</div>
          )}
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
