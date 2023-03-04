import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Navbar from './components/Navbar';
import StaticContent from './components/StaticContent';
// import 'bootstrap/dist/css/bootstrap.css';
// import Card from './components/Card';
import CardArray from './components/CardArray';


ReactDOM.render(
  <div>
    <Navbar />
    <StaticContent />
    {/* <Card /> */}
    <CardArray upto={8} />
  </div>,
  document.getElementById('root')
);
