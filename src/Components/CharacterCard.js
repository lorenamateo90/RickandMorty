import React from 'react';
import { Link } from 'react-router-dom';
import '../styleSheets/CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character/${props.id}`}>
        <li className='item__card--list' key={props.id} id={props.id}>
          <img
            className='item__card--img'
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <h4 className='item__card--title'>{props.character.name}</h4>
          <p className='item__card--description'>{props.character.species}</p>
          <p className='item__card--description'>{props.character.gender}</p>
        </li>
      </Link>
    </>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
