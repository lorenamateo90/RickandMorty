import React from 'react';
import '../styleSheets/FilterByName.scss';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'nameFilter',
    });
  };
  return (
    <div className='form'>
      <label className='form__label' htmlFor='name'>
        Find your favorite character
      </label>
      <input
        className='form__input-text'
        type='text'
        name='name'
        id='name'
        // placeholder="Busca tu personaje favorito"
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterByName;
