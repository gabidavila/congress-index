import React from 'react';
import { Segment } from 'semantic-ui-react';
import BillCard from './Card';

const BillCardList = (props) => {
  const listCards = props.list.map((item) => <BillCard key={item["bill_id"]} bill={item} /> );

  return (
    
    <Segment loading={props.list.length === 0 ? true : false} basic>
      {listCards}
    </Segment>
  );
};

export default BillCardList;