import React from 'react';
// import "../../stylesheets/Filters.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'nameFilter',
    });
  };
  return (
    <>
      <label className='form__label' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input
        className='form__input-text'
        type='text'
        name='name'
        id='name'
        // placeholder="Busca tu personaje favorito"
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
