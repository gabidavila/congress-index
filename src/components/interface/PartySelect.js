import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { parties } from '../../helpers/parties';
import _ from 'lodash';

const PartySelect = (props) => {

  const handleChange = (event, data) => {
    props.onChangeHandle('party', data.value);
  };

  const partyList = _.zip(Object.keys(parties), Object.keys(parties), _.map(parties, 'name')).map((party) => {
    return _.zipObject(['key', 'value', 'text'], party);
  });

  return (
    <Dropdown placeholder='Select Party' fluid search selection onChange={handleChange}
      options={[{ key: 'A', value: 'A', text: 'All Parties' }, ...partyList]}/>
  );
};

export default PartySelect;