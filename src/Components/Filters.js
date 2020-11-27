import React from 'react';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import '../styleSheets/Filters.scss';

// control del input
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
        <FilterByGender
          handleFilter={props.handleFilter}
          genderFilter={props.genderFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
