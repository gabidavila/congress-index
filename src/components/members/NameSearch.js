import React from 'react';
import {Input } from 'semantic-ui-react';

const NameSearch = (props) => {
  const handleChange = (event) => {
    props.onChangeHandle('name', event.target.value);
  };

  return (
    <Input placeholder='Search Member' value={props.typedValue || ''}  icon='search' fluid onChange={handleChange} />
  );
};

export default NameSearch;