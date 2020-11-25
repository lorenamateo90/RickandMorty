import React from 'react';
import CharacterCard from './CharacterCard';
import '../styleSheets/CharacterList.scss';
import PropTypes from 'prop-types';

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
CharacterList.prototype = {
  characters: PropTypes.array,
};

export default CharacterList;
