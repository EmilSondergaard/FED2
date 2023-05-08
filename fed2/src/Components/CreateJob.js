import React, { useState } from 'react';
import { NavigationBar } from './NavigationBar';
import './GeneralStyle.css';

function CreateJob() {
  const [customer, setCustomer] = useState("string");
  const [startDate, setStartDate] = useState("2023-05-04T09:00:00.469Z");
  const [days, setDays] = useState(0);
  const [location, setLocation] = useState("string");
  const [comments, setComments] = useState("string");

  const handleSubmit = () => { fetchData() };

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7181/api/Jobs', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customer: customer,
          startDate: startDate,
          days: days,
          location: location,
          comments: comments
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
          Customer:
          <input type="text" value={customer} onChange={e => setCustomer(e.target.value)} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="datetime-local" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          Days:
          <input type="number" value={days} onChange={e => setDays(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Comments:
          <input type="text" value={comments} onChange={e => setComments(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Job</button>
      </form>
    </div>
  )
}
export default CreateJob;