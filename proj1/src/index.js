import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Navbar from './assets/Navbar';
import Footer from './assets/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import MainContent from './assets/MainContent';
import './style.css'



ReactDOM.render(
  <div>
    <Navbar />
    {/* <App /> */}
    <MainContent />
    <Footer />
  </div>,
  document.getElementById('root')
);
