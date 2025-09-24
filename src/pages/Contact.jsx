import { useEffect } from 'react'

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact - Marvel App'
  }, [])

  return (
    <div>
      <h2>Contact</h2>
      <p>
        Pour toute question ou suggestion concernant cette application Marvel, 
        n'hésitez pas à nous contacter : 
        <a href="mailto:contact@marvelapp.com"> contact@marvelapp.com</a>
      </p>
    </div>
  )
}

export default ContactPage