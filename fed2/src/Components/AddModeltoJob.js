import React, { useState } from 'react';

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
            'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY4MzEyMzAwMCIsImV4cCI6IjE2ODMyMDk0MDAifQ.E4o0KlD4S9olPafFBnE5o2bW5dUNYCC18mCP0IoKKAM',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data); // log the response data to the console
      // do something with the response data, such as update the UI to reflect the new model added to the job
    } catch (error) {
      console.error(error);
      // handle the error, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <label htmlFor="model-id-input">Model ID:</label>
      <input type="text" id="model-id-input" value={modelID} onChange={handleModelIDChange} />
      <label htmlFor="job-id-input">Job ID:</label>
      <input type="text" id="job-id-input" value={jobID} onChange={handleJobIDChange} />
      <button onClick={handleAddModel}>Add Model to Job</button>
    </div>
  );
};

export default AddModelToJob;
