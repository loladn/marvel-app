const CharacterDetail = ({ character }) => {
    if (!character) {
        return (
            <div>
                <h2>Character not found</h2>
                <p>The character you are looking for does not exist.</p>
            </div>
        );
    }

    // Construct image URL from thumbnail object
    const imageUrl = character.thumbnail 
        ? `${character.thumbnail.path}.${character.thumbnail.extension}`
        : null;

    return (
        <div>
            <h2>{character.name}</h2>
            
            {/* Display character image if available */}
            {imageUrl && (
                <div style={{ marginBottom: '20px' }}>
                    <img 
                        src={imageUrl} 
                        alt={character.name}
                        style={{ 
                            maxWidth: '300px', 
                            height: 'auto',
                            borderRadius: '8px'
                        }}
                    />
                </div>
            )}
            
            {/* Display character description */}
            <div style={{ marginBottom: '20px' }}>
                <h3>Description</h3>
                {character.description && character.description.trim() !== '' ? (
                    <p>{character.description}</p>
                ) : (
                    <p><em>No description available for this character.</em></p>
                )}
            </div>
            
            {/* Display modified date if available */}
            {character.modified && (
                <div style={{ marginBottom: '10px', color: '#666', fontSize: '14px' }}>
                    <strong>Last Modified:</strong> {new Date(character.modified).toLocaleDateString()}
                </div>
            )}
        </div>
    );
};

export default CharacterDetail;