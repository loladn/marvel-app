import characters from '../data/characters.json';

// Retourne la liste complète des personnages
export const getCharacters = () => {
  return characters;
};

// Retourne un personnage en fonction de son id
export const getCharacterById = (id) => {
  return characters.find(character => character.id === id) || null;
};
