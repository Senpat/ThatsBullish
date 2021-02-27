import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/Header.js'
import Body from './components/Body.js'

import './style/style.css'

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
