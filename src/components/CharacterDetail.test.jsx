import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharacterDetail from './CharacterDetail'

describe('CharacterDetail', () => {
  test('shows not found message when character is null', () => {
    render(<CharacterDetail character={null} />)
    expect(screen.getByRole('heading', { level: 2, name: /character not found/i })).toBeInTheDocument()
    expect(screen.getByText(/does not exist/i)).toBeInTheDocument()
  })

  test('renders name, image, description and modified date when character provided', () => {
    const character = {
      id: '100',
      name: 'Dr Strange',
      thumbnail: { path: 'http://img', extension: 'png' },
      description: 'Master of the mystic arts',
      modified: '2021-07-01T12:00:00Z'
    }

    render(<CharacterDetail character={character} />)

    // heading
    expect(screen.getByRole('heading', { level: 2, name: /dr strange/i })).toBeInTheDocument()

    // image
    const img = screen.getByRole('img', { name: /dr strange/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', `${character.thumbnail.path}.${character.thumbnail.extension}`)

    // description
    expect(screen.getByText(character.description)).toBeInTheDocument()

    // last modified label
    expect(screen.getByText(/Last Modified:/i)).toBeInTheDocument()
  })

  test('shows fallback when description is blank', () => {
    const character = { id: '101', name: 'NoDesc', thumbnail: null, description: '   ' }
    render(<CharacterDetail character={character} />)
    expect(screen.getByText(/No description available/i)).toBeInTheDocument()
  })
})
