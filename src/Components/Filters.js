import React from 'react';
import FilterByName from './FilterByName';

const Filters = (props) => {
  return (
    <section>
      <form className='form'>
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
