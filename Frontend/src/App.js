import './App.css';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Signup from './components/Signup.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
           
              <Route path="/" element={Homepage} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/profile" element={<Profile/>}/>
          </Routes>
      </Router>
  );
}

export default App;
