import React from 'react';
import { Button, Header, Icon, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';

const ProfileInformation = ({ member }) => {
  const officeAddress = member['propublica-profile'].office ? <div>
    <Header as='h4' color='black'>
      <Icon name='envelope'/> Office Address
    </Header>
    <Segment color='grey'>
      {member["propublica-profile"].office}
    </Segment>
  </div> : null;
  return (
    <div>
      <Header as='h1' dividing>
        {member['full-name']}
        <Header.Subheader>
          {member["propublica-profile"].title}
          <Label color='black'>{member.congress}</Label>
        </Header.Subheader>
      </Header>

      {officeAddress}

      <Header as='h4' color='black'>
        <Icon name='info circle'/> Information
      </Header>
      <Segment color='grey'>
        <Button size='huge' primary className='remove-radius' floated='right' animated='vertical'>
          <Button.Content visible>
            <Icon name='phone' />{member.phone}
          </Button.Content>
          <Button.Content hidden>
            <Icon name='call square' />Call Member
          </Button.Content>
        </Button>
        <p><strong>Next Election: </strong>{member['next-election']}</p>
        <p><strong>Date of Birth: </strong>{moment(member['propublica-profile']['date-of-birth'], "YYYY-MM-DD").format("MM/DD/YYYY")}</p>
      </Segment>
    </div>
  );
};

export default ProfileInformation;