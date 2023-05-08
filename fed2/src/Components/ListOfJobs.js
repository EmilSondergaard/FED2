import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import './GeneralStyle.css';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('https://localhost:7181/api/jobs',
       {method: 'GET',
        headers: {
            'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJuY0BtLmRrIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTW9kZWwiLCJNb2RlbElkIjoiMSIsIm5iZiI6IjE2ODMyMDEyOTIiLCJleHAiOiIxNjgzMjg3NjkyIn0.M9bvMOS56sGfgolDhlqY5UGTEp0dMTgnbbTxTlTm6YM',
            'Content-Type': 'application/json'
        }});
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);
  return (
    
    <Fragment>
      <h2>Jobs List</h2>
    <table>
    <thead>
      <tr>
        <th>JobID</th>
        <th>Customer</th>
        <th>StartDate</th>
        <th>Days</th>
        <th>Location</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
      {jobs.map((job) => (
        <tr key={job.id}>
          <td>{job.jobId}</td>
          <td>{job.customer}</td>
          <td>{job.startDate}</td>
          <td>{job.days}</td>
          <td>{job.location}</td>
          <td>{job.comments}</td>
        </tr>
      ))}
    </tbody>
  </table>

    </Fragment>
    // <div>
    //   <h2>Jobs List</h2>
    //   <ul>
        
        
    //     {jobs.map((job) => 
    //       <li key={job.jobId}>JobID: {job.jobId} Customer: {job.customer}</li>
          
    //     )}
    //   </ul>
    // </div>
    
  );
};

export default JobsList;
