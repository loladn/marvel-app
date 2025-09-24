import { useEffect } from 'react'

function AboutPage() {
  useEffect(() => {
    document.title = 'About - Marvel App'
  }, [])

  return (
    <div>
      <h2>About</h2>
      <p>
        Cette application présente les personnages Marvel en utilisant React. 
        Elle a été développée pour démontrer les concepts fondamentaux de React 
        comme les composants, les props et la gestion d'état.
      </p>
    </div>
  )
}

export default AboutPage