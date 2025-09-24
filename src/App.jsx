import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Marvel Characters</h1>
      <ul>
        <li>Beast</li>
        <li>Captain America</li>
        <li>Deadpool</li>
      </ul>
    </>
  )
}

export default App
