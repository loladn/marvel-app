import { useState } from 'react'
import reactLogo from './assets/react.svg'
import characters from './data/characters.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
