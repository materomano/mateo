import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- IMPORTACIÓN CORRECTA
import App from './App';
import { LangProvider } from './components/LangContext';
import './Estilos/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);