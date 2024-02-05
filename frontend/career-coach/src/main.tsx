import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


// internal imports
import { CareerInfoCard, CourseDetailsCard, MonthCard, NavButton } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

