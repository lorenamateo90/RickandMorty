import '../styleSheets/App.scss';
import api from '../services/api';
import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
    });
  }, []);
  // Primero me sale un array vacío y luego los 20, si no pongo array vacío no para de hacer llamdas al servidor
  // event handler

  const handleFilter = (data) => {
    console.log('manejando los filtros', data);
  };

  return (
    <div>
      <h1 className='title'>poner logo título aquí</h1>
      <div className='container'>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={characters} />
      </div>
    </div>
  );
};

export default App;
