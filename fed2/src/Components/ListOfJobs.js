import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
// import './GeneralStyle.css';
import { NavigationBar } from './NavigationBar';
import './ListStyling.css';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('https://localhost:7181/api/jobs',
       {method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }});
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);
  return (

    <><div><NavigationBar /></div><Fragment>
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

    </Fragment></>
  
  );
};

export default JobsList;
