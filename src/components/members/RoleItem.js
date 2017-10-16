import React from 'react';
import { Item, Label, Header, Icon, Segment } from 'semantic-ui-react';
import { parties } from '../../helpers/congress';
import moment from 'moment';
import CommitteeList from '../committees/List';

const RoleItem = ({ role }) => {
  const startTerm = moment(role['start-date']).format('Y');
  const endTerm = moment(role['end-date']).format('Y');
  return (
    <Item>
      <div className='ui tiny image' style={{ textAlign: 'center' }}>
        <Label basic color={parties[role.party].color} size='massive'>{role.party}</Label>
      </div>
      <Item.Content>
        <Header as='h5' color='grey' floated='right'>
          {startTerm} - {endTerm}
        </Header>
        <Header as='h2'>
          {role.title}
          <Header.Subheader>
            {role.chamber} - {role.congress}
          </Header.Subheader>
        </Header>
        {
          role.committees.length ?
            <Segment basic clearing>
              <Header as='h4' color='black'>
                <Icon name='comments outline'/> Committees
              </Header>
              <CommitteeList committees={role.committees}/>
            </Segment>
            : null
        }

      </Item.Content>
    </Item>
  );
};

export default RoleItem;