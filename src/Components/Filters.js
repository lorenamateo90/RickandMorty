import React from 'react';
import FilterByName from './FilterByName';
import '../styleSheets/Filters.scss';

// controlamos el input con el preventDefault
const Filters = (props) => {
  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };
  return (
    <section>
      <form className='form' onSubmit={preventEvent}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
