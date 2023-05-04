import './App.css';
import { LoginForm } from './Components/LoginForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginForm></LoginForm>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
