import React, { useState } from 'react';
import { NavigationBar } from './NavigationBar';

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
          //   'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY4MzE5Mjc0NyIsImV4cCI6IjE2ODMyNzkxNDcifQ.ca_ayK6MfieoO2HSiZ70uPBPJWdrk5f7zZPHjIhpsLI',
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