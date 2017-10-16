import React from 'react';
import { Button, Header, Icon, Segment, Label, Loader } from 'semantic-ui-react';
import moment from 'moment';

const ProfileInformation = ({ member }) => {
  const officeAddress = member['propublica-profile'].office ?
    <div>
      <Header as='h4' color='black'>
        <Icon name='envelope'/> Office Address
      </Header>
      <Segment>
        {member['propublica-profile'].office}
      </Segment>
    </div> : null;
  return (
    <div>
      <Header as='h1' dividing>
        {member['full-name']}
        <Header.Subheader>
          {member['propublica-profile'].title}
          <Label color='black'>{member.congress}</Label>
        </Header.Subheader>
      </Header>
      {officeAddress}
      <Header as='h4' color='black'>
        <Icon name='info circle'/> Information
      </Header>
      <Segment stacked>
        <Button size='large' color='green' data-number={member.phone} data-member={member['full-name']} data-chamber={member['congress-type']} className='remove-radius' floated='right'
          id="call-representative">
          <Icon name='call square'/>Call Member, free!
        </Button>
        <Label id='calling-log' basic color='grey' style={{ float: 'right', fontSize: '18px' }}></Label>
        <Loader active id="calling-loader"/>
        {member['congress-type'] === 'house' ? <p><strong>District: </strong>{member['propublica-profile']['district']}</p> : null}
        <p><strong>Next Election: </strong>{member['next-election']}</p>
        <p><strong>Date of
          Birth: </strong>{moment(member['propublica-profile']['date-of-birth'], 'YYYY-MM-DD').format('MM/DD/YYYY')}</p>
        <p><strong>Phone: </strong>{member.phone}</p>
        {member['propublica-profile']['fax'] ?
          <p><strong>Fax: </strong>{member['propublica-profile']['fax']}</p> : null}
      </Segment>
    </div>
  );
};

export default ProfileInformation;
