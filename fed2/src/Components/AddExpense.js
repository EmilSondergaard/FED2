import React, { useState } from 'react';
import './GeneralStyle.css'
import { NavigationBar } from './NavigationBar';

export function AddExpense() {
    const [modelId, setModelId] = useState(0);
    const [jobId, setJobId] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = () => { postData() };

    const postData = async () => {
        try {
            const response = await fetch('https://localhost:7181/api/Expenses', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
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
        <div>
            <NavigationBar />
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
                <button type="submit" onChange={handleSubmit}>Add Expense</button>
            </form>
        </div>
    )
}