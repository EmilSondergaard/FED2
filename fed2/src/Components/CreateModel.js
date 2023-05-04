
import React, { useState } from 'react';
import { NavigationBar } from './NavigationBar';

function CreateModel() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [nationality, setNationality] = useState("");
  const [height, setHeight] = useState(0);
  const [shoeSize, setShoeSize] = useState(0);
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [comments, setComments] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => { fetchData() };

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7181/api/models', {
        method: 'POST',
        headers: {
          'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY4MzEyMzAwMCIsImV4cCI6IjE2ODMyMDk0MDAifQ.E4o0KlD4S9olPafFBnE5o2bW5dUNYCC18mCP0IoKKAM',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNo: phoneNo,
          addresLine1: addressLine1,
          addresLine2: addressLine2,
          zip: zip,
          city: city,
          country: country,
          birthDate: birthDate,
          nationality: nationality,
          height: height,
          shoeSize: shoeSize,
          hairColor: hairColor,
          eyeColor: eyeColor,
          comments: comments,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received:', data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>

      <NavigationBar />
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />
        </label>
        <br />
        <label>
          Address Line 1:
          <input type="text" value={addressLine1} onChange={e => setAddressLine1(e.target.value)} />
        </label>
        <br />
        <label>
          Address Line 2:
          <input type="text" value={addressLine2} onChange={e => setAddressLine2(e.target.value)} />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={e => setCity(e.target.value)} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" value={country} onChange={e => setCountry(e.target.value)} />
        </label>
        <br />
        <label>
          Birth Date:
          <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
        </label>
        <br />
        <label>
          Nationality:
          <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} />
        </label>
        <br />
        <label>
          Height:
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        </label>
        <br />
        <label>
          Shoe Size:
          <input type="number" value={shoeSize} onChange={e => setShoeSize(e.target.value)} />
        </label>
        <br />
        <label>
          Hair Color:
          <input type="text" value={hairColor} onChange={e => setHairColor(e.target.value)} />
        </label>
        <br />
        <label>
          Eye Color:
          <input type="text" value={eyeColor} onChange={e => setEyeColor(e.target.value)} />
        </label>
        <br />
        <label>
          Comments:
          <textarea value={comments} onChange={e => setComments(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Model</button>
      </form>
    </div>
  );

}

export default CreateModel;