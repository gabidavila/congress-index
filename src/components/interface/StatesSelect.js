import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const StatesSelect = (props) => {
  const handleChange = (event, data) => {
    props.onChangeHandler('selectedState', data.value);
  };

  const statesList = [{
    key: 'A',
    value: 'A',
    text: 'All States',
  }, ...props.states.map((state) => {
    return { key: state.attributes.state, value: state.attributes.state, text: state.attributes['state-full'] };
  })];

  return (
    <Dropdown placeholder='Select State' value={props.selectedValue} fluid search selection onChange={handleChange} options={statesList}/>
  );
};

export default StatesSelect;
