import React from 'react';
import { connect } from 'react-redux';
import * as MemberActions from '../actions/membersActions';
import { bindActionCreators } from 'redux';
import MembersFilter from './members/Filter';
import { Grid, Segment } from 'semantic-ui-react';
import MembersList from './members/List';

class MembersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMembers({});
  }

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Segment><MembersFilter/></Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <MembersList members={this.props.members} />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members.membersList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MemberActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer);
