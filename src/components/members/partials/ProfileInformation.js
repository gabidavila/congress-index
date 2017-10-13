import React from 'react';
import { Header, Icon, Segment, Label } from 'semantic-ui-react';
import { parties, chambers } from '../../../helpers/congress';
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
        <p><strong>Next Election: </strong>{member['next-election']}</p>
        <p><strong>Date of Birth: </strong>{moment(member['propublica-profile']['date-of-birth'], "YYYY-MM-DD").format("MM/DD/YYYY")}</p>
      </Segment>
    </div>
  );
};

export default ProfileInformation;