import React from 'react';
import '../styleSheets/App.scss';

const CharacterDetail = (props) => {
  console.log(props.image);
  return (
    <div className='modal'>
      <div>
        <div>
          <section>
            <img src={props.image} alt={props.name}></img>
            <ul>
              <li>{props.name}</li>
              <li>{props.species}</li>
              <li>{props.origin}</li>
              <li>{props.episodes}</li>
              <li>{props.status}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
