import characters from '../data/characters.json'

function CharactersList() {
  return (
    <div>
      {/* <p>Nombre de personnages : {characters.length}</p> */}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CharactersList