import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const userElements = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        character={character}
      />
    );
  });

  return (
    <section>
      <ul className='cards'>{userElements}</ul>
    </section>
  );
};

export default CharacterList;
