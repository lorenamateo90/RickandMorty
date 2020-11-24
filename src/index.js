import React from 'react';
import ReactDOM from 'react-dom';
// import './styleSheets/index.scss';
import App from './Components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
