import { useState } from 'react'

function Navigation({ currentPage, setCurrentPage }) {
  const pages = [
    { key: 'home', label: 'Home' },
    { key: 'characters', label: 'Characters' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ]

  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      {pages.map((page) => (
        <button
          key={page.key}
          onClick={() => setCurrentPage(page.key)}
          style={{
            margin: '0 10px',
            padding: '10px 15px',
            backgroundColor: currentPage === page.key ? '#007bff' : '#f8f9fa',
            color: currentPage === page.key ? 'white' : 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {page.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation