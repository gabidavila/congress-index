import React from 'react';
import { Grid, Segment, Loader, Header, Image, Icon } from 'semantic-ui-react';
import { parties, chambers } from '../../helpers/congress';

class MemberProfile extends React.Component {
  render() {
    if (!this.props.profile) {
      return (<Loader active inline='centered'/>);
    }

    const member = this.props.profile;
    const profileImage = member['twitter-picture-url'] || '/images/default_user.png';

    return (
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Image style={{
            width: '100%',
            padding: '8px',
            border: '2px solid #C6C6C6',
            borderLeftColor: '#e0e0e0',
            borderTopColor: '#e0e0e0',
            backgroundColor: 'white'
          }} size='small' src={profileImage}/>
          <Segment inverted color={chambers[member['congress-type']].color} textAlign='center'>
            <Icon name={chambers[member['congress-type']].icon}/>{chambers[member['congress-type']].name}
          </Segment>
          <Segment inverted color={parties[member.party].color} textAlign='center'>
            <Icon name='fa'/>{parties[member.party].name}
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as='h1' dividing>{member['full-name']}</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MemberProfile;
