import { useLoaderData } from "react-router";
import CharacterDetail from "../components/CharacterDetail";

const CharacterDetailPage = () => {
    const { character } = useLoaderData();
    
    document.title = character
        ? `${character.name} | Marvel App`
        : "Character not found | Marvel App";
    
    return <CharacterDetail character={character} />;
};

export default CharacterDetailPage;