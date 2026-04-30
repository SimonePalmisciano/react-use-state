import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// foglio di stile generale
import './styles/index.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
