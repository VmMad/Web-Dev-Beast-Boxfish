import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProviderWrapper } from './context/ThemeContext'


createRoot(
  document.getElementById('root')
).render(
  <Router>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </Router>,
)