import { Link } from 'react-router'

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
      <style>
        {`
          li a {
            color: #333;
            text-decoration: none;
          }
          
          li a:hover {
            text-decoration: underline;
            color: #007bff;
          }
        `}
      </style>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharactersList