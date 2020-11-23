import '../styleSheets/App.scss';
import api from '../services/api';
import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
    });
  }, []);
  // Primero me sale un array vacío y luego los 20, si no pongo array vacío no para de hacer llamdas al servidor
  return (
    <>
      <h1 className='title'>poner logo título aquí</h1>
      <div className='container'>
        <CharacterList characters={characters} />
      </div>
    </>
  );
};

export default App;
