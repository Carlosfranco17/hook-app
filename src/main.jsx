import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterApp } from './01-useState/CounterApp'
// import { HookApp } from './HookApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<CounterApp/>

    {/* <HookApp/> */}
  </React.StrictMode>,
)
