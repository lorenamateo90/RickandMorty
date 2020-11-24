import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character/${props.id}`}>
        <li className='card' key={props.id} id={props.id}>
          <img
            className='card_img'
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <h4 className='card_title'>{props.character.name}</h4>
          <p className='card_description'>{props.character.species}</p>
        </li>
      </Link>
    </>
  );
};

export default CharacterCard;
