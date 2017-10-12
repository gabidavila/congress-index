import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const CongressSelect = (props) => {
  const handleChange = (event, data) => {
    props.onChangeHandle('congress', data.value);
  };

  const congressList = [
    {
      key: 'house',
      value: 'house',
      text: 'House'
    }, {
      key: 'senate',
      value: 'senate',
      text: 'Senate'
    }
  ];

  return (
    <Dropdown placeholder='Select Chamber' fluid selection onChange={handleChange}
      options={[{ key: 'all', value: '', text: 'All Chambers' }, ...congressList]}/>
  );
};

export default CongressSelect;