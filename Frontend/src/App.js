import './App.css';
import CustomerType from './components/CustomerType';
import Employee from './components/Employee';
import Homepage from './components/Homepage';
import Member from './components/Member';
import Nonmember from './components/Nonmember';
import Profile from './components/Profile';
import Signup from './components/Signup.jsx';
import React from 'react';
import Code from './components/Code';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import GuestCheckout from './components/GuestCheckout';
import Scan from './components/Scan';

function App() {
  return (
      <Router>
          <Routes>
           
              <Route path="/" element={Homepage} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/employee" element={<Employee/>}/>
              <Route path="/cust" element={<CustomerType/>}/>
              <Route path="/member" element={<Member/>}/>
              <Route path="/nonmember" element={<Nonmember/>}/>
              <Route path="/code" element={<Code/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/guest" element={<GuestCheckout/>}/>
              <Route path="/scan" element={<Scan/>}/>
          </Routes>

      </Router>
  );
}

export default App;
