import React, { StrictMode } from 'react'; // Import StrictMode here
import ReactDOM from 'react-dom/client'; // Import createRoot from here
import { Provider } from 'react-redux';
import store from './components/redux/store.js';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

