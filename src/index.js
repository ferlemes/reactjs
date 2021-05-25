import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NewPromotion from "./components/pages/promotion/new";
//import reportWebVitals from './reportWebVitals';

const changeRequest = {
    id: 42,
    project: '/tools/pipeline-events',
    version: '1.0.2',
    type: 'regular',
    reason: 'Correção de bug'
}

ReactDOM.render(
  <React.StrictMode>
    <NewPromotion changeRequest={changeRequest} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
