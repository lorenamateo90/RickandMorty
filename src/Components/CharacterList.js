import React from 'react';
import CharacterCard from './CharacterCard';
import '../styleSheets/CharacterList.scss';

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
      <ul className='list'>{userElements}</ul>
    </section>
  );
};

export default CharacterList;
