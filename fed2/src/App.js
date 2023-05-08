import './App.css';
import { LoginForm } from './Components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import CreateModel from './Components/CreateModel';
import CreateJob from './Components/CreateJob';
import AddModelToJob from './Components/AddModeltoJob';
import DeleteModelFromJob from './Components/DeleteModelFromJob';
import { AddExpense } from './Components/AddExpense';
import CreatManager from './Components/CreateManager';
import JobsList from './Components/ListOfJobs';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Home" element={<NavigationBar />} />
          <Route path="/CreateModel" element={<CreateModel />} />
          <Route path="/CreateJob" element={<CreateJob />} />
          <Route path="/AddModelToJob" element={<AddModelToJob />} />
          <Route path="/DeleteModelFromJob" element={<DeleteModelFromJob />} />
          <Route path="/AddExpense" element={<AddExpense />} />
          <Route path="/CreateManager" element={<CreatManager />} />
          <Route path="/ListOfJobs" element={< JobsList/>} />
        </Routes>
      </Router> 

    </div>
  );
}

export default App;
