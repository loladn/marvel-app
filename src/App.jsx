import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './pages/Home'
import CharactersPage from './pages/Characters'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'characters':
        return <CharactersPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ padding: '0 20px' }}>
        {renderPage()}
      </main>
    </>
  )
}

export default App
