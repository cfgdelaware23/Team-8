import './App.css';
import Signup from './components/Signup.jsx';
import Employee from './components/Employee.jsx';
import CustomerType from './components/CustomerType';
import Nonmember from './components/Nonmember';
import Member from './components/Member';
import Scan from './components/Scan';
import GuestCheckout from './components/GuestCheckout';
import Checkout from './components/Checkout';
import Code from './components/Code';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Scan/>
    </div>
  );
}

export default App;
