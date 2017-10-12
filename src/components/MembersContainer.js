import React from 'react';
import { connect } from 'react-redux';
import * as MemberActions from '../actions/membersActions';
import { bindActionCreators } from 'redux';
import MembersFilter from './members/Filter';
import { Grid, Segment, Loader } from 'semantic-ui-react';
import MembersList from './members/List';

class MembersContainer extends React.Component {
  handleChange = (filter) => {
    this.props.fetchMembers(filter);
  };

  componentDidMount() {
    this.props.fetchMembers({});
  };

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Segment><MembersFilter onChangeHandle={this.handleChange}/></Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          {this.props.loading ? <Loader active inline='centered'/> : <MembersList members={this.props.members}/>}
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members.membersList,
    loading: state.members.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MemberActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer);
