import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { parties } from '../../helpers/parties';
import lodash from 'lodash';

const PartySelect = (props) => {

  const handleChange = (event, data) => {
    props.onChangeHandle('party', data.value);
  };

  const partyList = lodash.zip(Object.keys(parties), Object.keys(parties), lodash.map(parties, 'name')).map((party) => {
    return lodash.zipObject(['key', 'value', 'text'], party);
  });

  return (
    <Form.Field>
      <label>Party</label>
      <Dropdown placeholder='Select Party' fluid search selection onChange={handleChange}
        options={[{ key: 'A', value: 'A', text: 'All Parties' }, ...partyList]}/>
    </Form.Field>
  );

};

export default PartySelect;