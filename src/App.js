import './App.css';
// import {} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/sign" element={<SignUpPage />} />
            <Route exact path="/home" element={<HomePage />} />
            {/* <Route exact path="/analysis" element={<Cards />} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
