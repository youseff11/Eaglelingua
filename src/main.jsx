import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { I18nProvider } from './lib/i18n.jsx';
import { Router } from './lib/router.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider>
      <Router>
        <App />
      </Router>
    </I18nProvider>
  </StrictMode>
);
