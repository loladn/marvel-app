export default function NumberOfCharacters({ characters = [] }) {
    if (characters.length === 0) {
      return <p>There is no character</p>;
    }

    const verb = characters.length === 1 ? "is" : "are";
    const noun = characters.length === 1 ? "character" : "characters";

    return <p>There {verb} {characters.length} {noun}</p>;
}