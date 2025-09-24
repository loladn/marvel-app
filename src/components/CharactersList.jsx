function CharactersList({ characters = [] }) {
  if (!characters || characters.length === 0) {
    return (
      <div>
        <p>No characters to display</p>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CharactersList