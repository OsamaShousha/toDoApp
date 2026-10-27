import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import TodoUseEffect from "./useEffect/TodoUseEffect"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App /> */}
  <TodoUseEffect/>
  </StrictMode>,
)
