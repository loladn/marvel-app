function NumberOfCharacters({ characters }) {
  if (!characters || characters.length === 0) {
    return <p>There is no character</p>
  }
  
  return <p>There is {characters.length} characters</p>
}

export default NumberOfCharacters
