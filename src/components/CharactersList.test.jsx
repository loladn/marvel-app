import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// Mock Link from react-router used by CharactersList
jest.mock('react-router', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>
}))

import CharactersList from './CharactersList'

describe('CharactersList', () => {
  test('displays empty message when there are no characters', () => {
    render(<CharactersList characters={[]} />)
    expect(screen.getByText('No characters to display')).toBeInTheDocument()
  })

  test('renders links for each character', () => {
    const characters = [
      { id: '10', name: 'Black Panther' },
      { id: '11', name: 'Wolverine' }
    ]

    render(<CharactersList characters={characters} />)

    const panther = screen.getByRole('link', { name: /black panther/i })
    const wolverine = screen.getByRole('link', { name: /wolverine/i })

    expect(panther).toBeInTheDocument()
    expect(panther).toHaveAttribute('href', '/characters/10')
    expect(wolverine).toBeInTheDocument()
    expect(wolverine).toHaveAttribute('href', '/characters/11')
  })
})
