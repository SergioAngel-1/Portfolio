import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM        from 'react-dom/client';
import Root            from './Components/Root.js';
import ContainerInfo   from './Components/ContainerInfo.js';
import React           from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

const containerInfo = ReactDOM.createRoot(document.getElementById('containerInfo'));
containerInfo.render(
  <React.StrictMode>
    <ContainerInfo/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
