import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/Style/App.css';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="background">
      <App />
    </div>
  </React.StrictMode>
);
