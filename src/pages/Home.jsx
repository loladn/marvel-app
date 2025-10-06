import { useEffect } from 'react'
import CharactersPage from './Characters'

function HomePage() {
  useEffect(() => {
    document.title = 'Home - Marvel App'
  }, [])

  // Pour l'instant, on affiche le même contenu que CharactersPage
  return (
    <div>
      <h1>Welcome to Marvel App</h1>
      <CharactersPage />
    </div>
  )
}

export default HomePage