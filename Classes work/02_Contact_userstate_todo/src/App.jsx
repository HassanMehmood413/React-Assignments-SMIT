import React, { useState } from 'react';
import "./app.css";

export default function First() {
  const [UserName, SetUserName] = useState('');
  const [UserEmail, SetUserEmail] = useState('');
  const [ContactNo, SetContactNo] = useState('');
  const [ContactList, SetContactList] = useState([
    { id: 1, name: 'Hassan', email: 'hassan@gmail.com', contact: '123456789' },
    { id: 2, name: 'Hammad', email: 'Hammad@gmail.com', contact: '987654321' },
    { id: 3, name: 'Umar', email: 'umar@gmail.com', contact: '456789123' }
  ]);

  const AddContact = () => {
    if(UserName == "" || UserEmail == "" || ContactNo == ""){
      alert("Please Fill All Fields");
      return;
    }
    const duplicate = ContactList.some(value => value.contact === ContactNo);

    if (duplicate) {
      alert("Contact Number Already Exists");
    } else {
      SetContactList([...ContactList, { 
        id: ContactList.length + 1, 
        name: UserName, 
        email: UserEmail, 
        contact: ContactNo 
      }]);

      SetUserName('');
      SetUserEmail('');
      SetContactNo('');
    }
  };

  const DeleteContact = (id) => {
    const updatedList = ContactList.filter(value => value.id !== id);
    SetContactList(updatedList);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <label>Name:</label>
      <input type="text" value={UserName} onChange={(e) => SetUserName(e.target.value)} />

      <br />

      <label>Email:</label>
      <input type="email" value={UserEmail} onChange={(e) => SetUserEmail(e.target.value)} />

      <br />
      <label>Contact:</label>
      <input type="number" value={ContactNo} onChange={(e) => SetContactNo(e.target.value)} />

      <br />
      <button className="addbtn" onClick={AddContact}>Add Contact</button>

      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {ContactList.map((value) => (
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.contact}</td>
              <td>
                <button className="deletebtn" onClick={() => DeleteContact(value.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
