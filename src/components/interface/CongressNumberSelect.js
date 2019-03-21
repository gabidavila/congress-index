import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { congressNumbers } from '../../helpers/congress';

const CongressNumberSelect = (props) => {
  const handleChange = (event, data) => {
    props.onChangeHandle('congressNumber', data.value);
  };

  const congressNumbersList = congressNumbers.map((number) => {
    return {
      key: number,
      value: number,
      text: number
    };
  });

  return (
    <Dropdown placeholder='Select Congress' value={props.selectedValue} fluid selection onChange={handleChange}
      options={congressNumbersList}/>
  );
};

export default CongressNumberSelect;