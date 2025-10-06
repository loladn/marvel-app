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
            color: #007bff;
            text-decoration: none;
          }
          
          li a:hover {
            text-decoration: underline;
            color: #0056b3;
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