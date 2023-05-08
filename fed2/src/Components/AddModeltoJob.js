import React, { useState } from 'react';
import './GeneralStyle.css'
import { NavigationBar } from './NavigationBar';

const AddModelToJob = () => {
  const [modelID, setModelID] = useState('');
  const [jobID, setJobID] = useState('');

  const handleModelIDChange = (event) => {
    setModelID(event.target.value);
  };

  const handleJobIDChange = (event) => {
    setJobID(event.target.value);
  };

  const handleAddModel = async () => {
    try {
      const response = await fetch(`https://localhost:7181/api/Jobs/${jobID}/Model/${modelID}`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <div>
      <NavigationBar />
      <form>
      <div>
        <label htmlFor="model-id-input">Model ID:</label>
        <input type="text" id="model-id-input" value={modelID} onChange={handleModelIDChange} />
        <label htmlFor="job-id-input">Job ID:</label>
        <input type="text" id="job-id-input" value={jobID} onChange={handleJobIDChange} />
        <button onClick={handleAddModel}>Add Model to Job</button>
      </div>
    
    </form>
    </div>
  );
};

export default AddModelToJob;
