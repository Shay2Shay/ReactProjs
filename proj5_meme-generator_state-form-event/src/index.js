import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <div>
    <Navbar />
    <UserForm />
  </div> ,
  document.getElementById('root')
);
