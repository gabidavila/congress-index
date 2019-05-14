import React from 'react';
import {Segment, Header, Icon, Label} from 'semantic-ui-react';
import moment from 'moment';
import { parties } from '../../helpers/congress';

class BillsItem extends React.Component {
  render () {
    const congress = this.props.bill['bill_id'].substr(this.props.bill['bill_id'].lastIndexOf('-') + 1, 3);
    const profileUrl = `/members/${ this.props.bill['sponsor_id']}`;

    return (
      <Segment>
        <Header dividing as='h3'>
          <Header.Content>
            { this.props.bill['short_title'] }
            <Header.Subheader>
              { this.props.bill['bill_id'] } | <a href={ `/${ congress }/bills/${ this.props.bill["bill_slug"] }` }>View <Icon name='external alternate' /></a>
              <p>Status: { this.props.bill['active'] ? 'active' : 'inactive'} | Introduced in: {moment(this.props.bill['introduced_date']).format('YYYY-MM-DD') }</p>
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Label style={{ float: 'left', marginRight: '10px' }} basic color={ parties[this.props.bill['sponsor_party']].color } size='massive'>{ this.props.bill['sponsor_party'] }</Label>
        <p><em>({ moment(this.props.bill['last_major_action_date']).format('YYYY-MM-DD') }) - { this.props.bill['latest_major_action'] }</em></p>
        <p>Sponsor: <strong>{ this.props.bill['sponsor_title'] + ' ' + this.props.bill['sponsor_name'] }</strong> <a href={ profileUrl } target='_blank'><Icon name='external alternate' /></a></p>
        { this.props.bill['committees'] ? <p>Committee: { this.props.bill['committees'] }</p> : null }
      </Segment>
    );
  }
}

export default BillsItem;