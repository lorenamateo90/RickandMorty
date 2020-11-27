import React from 'react';
// import '../styleSheets/FilterByName.scss';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };
  return (
    <div className='form'>
      <label className='gender' htmlFor='gender'>
        Choose your gender
      </label>
      <select id='gender' name='gender' onChange={handleChange}>
        <option value='select'>Select gender</option>
        <option value='Female'>female</option>
        <option value='Male'>male</option>
        <option value='unknown'>unknown</option>
      </select>
    </div>
  );
};

export default FilterByGender;
