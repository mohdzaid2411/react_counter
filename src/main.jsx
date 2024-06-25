import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(   //createRoot-> this method create a DOM and than compare main DOM and its own DOM and than update UI as per the changes (single page Appliction). On the otherhand browser remove full DOM and than paintfull new DOM called page reload (circular icon).
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
