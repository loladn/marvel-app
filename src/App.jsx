import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CharactersList from './components/CharactersList'
import NumberOfCharacters from './components/NumberOfCharacters'
import characters from './data/characters.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Marvel Characters</h1>
      <NumberOfCharacters characters={characters} />
      <CharactersList />
    </>
  )
}

export default App
