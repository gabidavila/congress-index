import React from 'react';
import {Segment, Header, Icon, Label} from 'semantic-ui-react';
import moment from 'moment';
import { parties } from '../../helpers/congress';

const BillsItem = (props) => {
  const congress = props.bill["bill_id"].substr(props.bill["bill_id"].lastIndexOf('-') + 1, 3);
  const profileUrl = `/members/${ props.bill['sponsor_id']}`;

  return (
    <Segment>
      <Header dividing as='h3'>
        <Header.Content>
          { props.bill["short_title"] }
          <Header.Subheader>
            { props.bill["bill_id"] } | <a href={ `/${ congress }/bills/${ props.bill["bill_slug"] }` }>View <Icon name='external alternate' /></a>
            <p>Status: { props.bill["active"] ? 'active' : 'inactive'} | Introduced in: {moment(props.bill["introduced_date"]).format('YYYY-MM-DD') }</p>
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Label style={{ float: 'left', marginRight: '10px' }} basic color={ parties[props.bill["sponsor_party"]].color } size='massive'>{ props.bill["sponsor_party"] }</Label>
      <p><em>({ moment(props.bill["last_major_action_date"]).format('YYYY-MM-DD') }) - { props.bill["latest_major_action"] }</em></p>
      <p>Sponsor: <strong>{ props.bill["sponsor_title"] + " " + props.bill["sponsor_name"] }</strong> <a href={ profileUrl } target='_blank'><Icon name='external alternate' /></a></p>
      { props.bill["committees"] ? <p>Committee: { props.bill["committees"] }</p> : null }
    </Segment>
  );
};

export default BillsItem;