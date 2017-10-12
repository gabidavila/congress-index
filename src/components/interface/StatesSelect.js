import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const StatesSelect = (props) => {
  const handleChange = (event, data) => {
    props.onChangeHandler('selectedState', data.value);
  };

  const statesList = [{
    key: 'A',
    value: 'A',
    text: 'All States',
  }, ...props.states.map((state) => {
    return { key: state.state, value: state.state, text: state.state_full };
  })];

  return (
    <Form.Field>
      <label>State</label>
      <Dropdown placeholder='Select State' fluid search selection onChange={handleChange} options={statesList}/>
    </Form.Field>
  );
};

export default StatesSelect;