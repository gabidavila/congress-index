import React from 'react';
import { Grid, Segment, Loader, Header, Image } from 'semantic-ui-react';

class MemberProfile extends React.Component {
  render() {
    if (!this.props.profile) {
      return (<Loader active inline='centered'/>);
    }
    console.log(this.props.profile)
    const member = this.props.profile;
    const profileImage = member.twitter_picture_url || '/images/default_user.png';

    return (
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Image style={{width: '100%', padding: '8px', border: '2px solid #C6C6C6', borderLeftColor: '#e0e0e0', borderTopColor: '#e0e0e0', backgroundColor: 'white'}} size='small' src={profileImage}/>
          <Segment inverted color='purple' textAlign='center'>Top</Segment>
          <Segment inverted color='teal' textAlign='center'>Middle</Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as='h1' dividing>{member.full_name}</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MemberProfile;
