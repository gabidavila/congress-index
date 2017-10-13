import React from 'react';
import { connect } from 'react-redux';
import * as MemberActions from '../actions/membersActions';
import { bindActionCreators } from 'redux';
import { initialState } from "../helpers/filter";
import MembersFilter from './members/Filter';
import { Grid, Segment, Loader, Button, Header } from 'semantic-ui-react';
import MembersList from './members/List';

class MembersContainer extends React.Component {
  state = {
    offset: 0,
    nextButton: true,
    previousButton: false
  };
  handleChange = (filter) => {
    this.props.fetchMembers(filter);
  };

  componentDidMount() {
    this.props.fetchMembers(initialState());
  };

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Segment><MembersFilter onChangeHandle={this.handleChange}/></Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          {
            this.props.loading ? <Loader active inline='centered'/> : (
              <div>
                <Segment vertical textAlign='center'>
                  <Button circular disabled={!this.state.previousButton} size="big">&lt;</Button>
                  <Header as='span' style={{ margin: "10px" }}>Members&nbsp;</Header>
                  <Button circular disabled={!this.state.nextButton} size="big">&gt;</Button>
                </Segment>
                <Segment vertical>
                  <MembersList members={this.props.members}/>
                </Segment>
              </div>
            )}
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
