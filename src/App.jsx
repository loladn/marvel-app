import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CharactersList from './components/CharactersList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList />
    </>
  )
}

export default App
