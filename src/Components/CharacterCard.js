import React from 'react';

const CharacterCard = (props) => {
  return (
    <li className='card'>
      <img
        className='card_img'
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className='card_title'>{props.character.name}</h4>
      <p className='card_description'>{props.character.species}</p>
    </li>
  );
};

export default CharacterCard;
