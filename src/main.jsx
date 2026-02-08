// Import React library
import React from 'react'

// Import ReactDOM to render the app
import ReactDOM from 'react-dom/client'

// Import the main App component
import App from './App.jsx'

// Import global styles
import './index.css'

// Render the App component into the HTML element with id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)