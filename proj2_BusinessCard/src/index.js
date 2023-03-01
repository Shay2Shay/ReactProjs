import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

ReactDOM.render(
  <div className='container my-5'>
    <Card />
  </div>,
  document.getElementById('root')
);
