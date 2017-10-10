import React from 'react';
import { Grid, Paper } from 'material-ui';
import { connect } from 'react-redux';
import * as MemberActions from '../actions/membersActions';
import { bindActionCreators } from 'redux';
import StatesSelect from './interface/StatesSelect';

class MembersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMembers({});
  }

  render() {
    return (
      <Grid container className="grid-container members-container" spacing={24}>
        <Grid item xs={12} sm={6} md={3} className="grid-item left-sidebar">
          <Paper elevation={1}><StatesSelect/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={9} className="grid-item middle-container">
          <Paper elevation={1}>Middle</Paper>
        </Grid>
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
