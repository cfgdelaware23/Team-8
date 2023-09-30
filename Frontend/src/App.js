import './App.css';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Signup from './components/Signup.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* {Homepage} */}
      <Profile/>
      <Signup/>
    </div>
  );
}

export default App;
