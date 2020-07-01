import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import EmployeeProvider from './contexts/Employees'


ReactDOM.render(
  <React.StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);