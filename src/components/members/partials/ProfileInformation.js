import React from 'react';
import { Button, Header, Icon, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';

const ProfileInformation = ({ member }) => {
  const officeAddress = member['propublica-profile'].office ? <div>
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
      <Segment>
        <Button size='large' primary className='remove-radius' floated='right' animated='vertical'>
          <Button.Content visible id="call-representative">
            <Icon name='phone' />{member.phone}
          </Button.Content>
          <Button.Content hidden>
            <Icon name='call square' />Call Member
          </Button.Content>
        </Button>
        <p><strong>District: </strong>{member['propublica-profile']['district']}</p>
        <p><strong>Next Election: </strong>{member['next-election']}</p>
        <p><strong>Date of Birth: </strong>{moment(member['propublica-profile']['date-of-birth'], 'YYYY-MM-DD').format('MM/DD/YYYY')}</p>
        <p><strong>Phone: </strong>{member.phone}</p>
        <p><strong>Fax: </strong>{member['propublica-profile']['fax']}</p>
      </Segment>
    </div>
  );
};

export default ProfileInformation;
