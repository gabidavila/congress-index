import React from 'react';
import { Grid } from 'semantic-ui-react';
import { getMemberById } from '../adapters/congress';
import MemberProfile from './members/Profile';

class ProfileContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: null
    };
  }

  componentDidMount() {
    getMemberById(this.props.match.params.id)
      .then((member) => {
        this.setState({ profile: member.data.attributes });
      });
  }

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={16}>
          <MemberProfile profile={this.state.profile}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProfileContainer;
