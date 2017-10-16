import React from 'react';
import { Grid, Loader, Divider } from 'semantic-ui-react';
import ProfiileImage from './partials/PorfileImage';
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
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <ProfiileImage member={member} />
          <Divider/>
          <ProfileSocialMedia member={member}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <ProfileInformation member={member}/>
          <RolesList roles={member.career.roles}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MemberProfile;
