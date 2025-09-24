import { useEffect } from 'react'
import CharactersList from '../components/CharactersList'
import NumberOfCharacters from '../components/NumberOfCharacters'
import characters from '../data/characters.json'

function CharactersPage() {
  useEffect(() => {
    document.title = 'Characters - Marvel App'
  }, [])

  return (
    <div>
      <h2>Marvel Characters</h2>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
    </div>
  )
}

export default CharactersPage