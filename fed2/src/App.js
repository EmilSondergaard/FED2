import './App.css';
import { LoginForm } from './Components/LoginForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SiteNavigation } from './Components/SiteNavigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/Home" element={<SiteNavigation/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
