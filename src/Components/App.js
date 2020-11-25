import '../styleSheets/App.scss';
import api from '../services/api';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './Loading';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import logo from '../images/logo.png';

// states
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // fetch
  useEffect(() => {
    setIsLoading(true);
    api().then((data) => {
      setCharacters(data);
      setIsLoading(false);
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

  //Organizamos los personajes por orden alfabético
  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === character.id;
    });
    if (foundCharacter) {
      return (
        <CharacterDetail
          image={foundCharacter.image}
          name={foundCharacter.name}
          species={foundCharacter.species}
          origin={foundCharacter.origin}
          episodes={foundCharacter.episodes}
          status={foundCharacter.status}
        />
      );
    } else {
      return <p>El personaje que busca no existe</p>;
    }
  };

  return (
    <div className='container'>
      {isLoading === true ? <Loading /> : null}
      <div>
        <header className='header'>
          <img src={logo} alt='Rick and Morty' title='Rick and Morty' />
        </header>
        <main>
          <Filters handleFilter={handleFilter} />
          <Switch>
            <Route exact path='/'>
              <CharacterList
                nameFilter={nameFilter}
                characters={filteredCharacters}
              />
            </Route>
            <Route path='/character/:id' component={renderCharacterDetail} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;
