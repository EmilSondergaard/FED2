import React, { useState } from 'react';

export function AddExpense() {
  const [modelId, setModelId] = useState(number);
  const [jobId, setJobId] = useState(number);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(number);

  const handleSubmit = () => { fetchData() };

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7181/api/Expenses', {
        method: 'POST',
        headers: {
        //   'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY4MzE5Mjc0NyIsImV4cCI6IjE2ODMyNzkxNDcifQ.ca_ayK6MfieoO2HSiZ70uPBPJWdrk5f7zZPHjIhpsLI',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          modelId,
          jobId,
          date,
          text,
          amount
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
    <form onSubmit={handleSubmit}>
      <label>
        Model Id:
        <input type="number" value={modelId} onChange={e => setModelId(e.target.value)} />
      </label>
      <br />
      <label>
        Job Id:
        <input type="number" value={jobId} onChange={e => setJobId(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Text:
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Expense</button>
      </form>
    )
}