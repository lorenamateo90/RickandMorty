import '../styleSheets/App.scss';
import api from '../services/api';
import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

// states
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  // fetch
  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
    });
  }, []);
  // Primero me sale un array vacío y luego los 20, si no pongo array vacío no para de hacer llamdas al servidor

  // event handler
  const handleFilter = (data) => {
    if (data.key === 'nameFilter') {
      setNameFilter(data.value);
    }
  };
  //Filtrado de personajes
  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <div>
      <h1 className='title'>poner logo título aquí</h1>
      <div className='container'>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default App;
