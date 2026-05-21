import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log('1. index.js chargé');

const rootElement = document.getElementById('root');
console.log('2. Root element:', rootElement);

if (rootElement) {
  console.log('3. Root element trouvé, montage de React...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('4. React monté avec succès');
} else {
  console.error('ERREUR: Root element non trouvé!');
}
