import '../styleSheets/App.scss';
import api from '../services/api';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api().then((data) => {
      setCharacters(data);
    });
  }, []);

  return <div className='App'>Hola, Mundo</div>;
};

export default App;
