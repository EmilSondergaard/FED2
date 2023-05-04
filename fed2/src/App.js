import './App.css';
import { LoginForm } from './Components/LoginForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import CreateModel from './Components/CreateModel';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/Home" element={<NavigationBar/>} />
          <Route path="/CreateModel" element={<CreateModel/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
