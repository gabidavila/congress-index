import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import moment from 'moment';

const BillsItem = (props) => {
  return (
    <Segment>
      <Header dividing as='h3'>
        <Header.Content>
          {props.bill["short_title"]}
          <Header.Subheader>
            {props.bill["bill_id"]} | <a href={`/bills/${props.bill["bill_slug"]}`}>View <Icon name='external alternate' /></a>
            <p>Status: {props.bill["active"] ? 'active' : 'inactive'} | Introduced in: {moment(props.bill["introduced_date"]).format('YYYY-MM-DD')}</p>
          </Header.Subheader>
        </Header.Content>
      </Header>
      <p><em>({moment(props.bill["last_major_action_date"]).format('YYYY-MM-DD')}) - {props.bill["latest_major_action"]}</em></p>
      <p>Committee: {props.bill["committees"]}</p>
    </Segment>
  );
};

export default BillsItem;