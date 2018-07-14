import React from 'react';
import { Segment } from 'semantic-ui-react';
import BillsItem from './Item';

const BillsList = (props) => {
  const listItems = props.list.map((item) => <BillsItem key={item["bill_id"]} bill={item} /> );

  return (
    
    <Segment loading={props.list.length === 0 ? true : false} basic>
      {listItems}
    </Segment>
  );
};

export default BillsList;