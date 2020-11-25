import React from 'react';
import '../styleSheets/CharacterDetail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props.image);
  return (
    <div className='container'>
      <div className='detail'>
        <section className='detail__section'>
          <img className='detail__img' src={props.image} alt={props.name}></img>

          <ul>
            <li className='detail__name'>{props.name}</li>
            <li>{props.species}</li>
            <li>{props.origin}</li>
            <li>{props.episodes}</li>
            <li>{props.status}</li>
          </ul>
          <Link to='/'>
            <div className='button'>
              <p>Back</p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CharacterDetail;
