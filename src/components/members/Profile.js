import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import ProfiileImage from './partials/ProfileSnapshot';
import ProfileInformation from './partials/ProfileInformation';
import ProfileSocialMedia from './partials/ProfileSocialMedia';
import RolesList from './RolesList';

class MemberProfile extends React.Component {
  render() {

    if (!this.props.profile) {
      return (<Loader active inline='centered'/>);
    }
    const member = this.props.profile;

    return (
      <Grid stackable columns={3}>
        <Grid.Column width={3}>
          <ProfiileImage member={member} />
        </Grid.Column>
        <Grid.Column width={10}>
          <ProfileInformation member={member}/>
          <RolesList roles={member.career.roles}/>
        </Grid.Column>
        <Grid.Column width={3}>
          <ProfileSocialMedia member={member}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MemberProfile;
