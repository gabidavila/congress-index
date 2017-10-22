import React from 'react';
import { connect } from 'react-redux';
import * as MemberActions from '../actions/membersActions';
import { bindActionCreators } from 'redux';
import { initialState } from '../helpers/filter';
import MembersFilter from './members/Filter';
import { Grid, Segment, Loader, Button, Header, Divider, Icon } from 'semantic-ui-react';
import MembersList from './members/List';
import Zipcode from './interface/Zipcode';
import ContainerNavigation from './interface/Navigation';

class MembersContainer extends React.Component {
  state = {
    page: 1,
    nextButton: true,
    previousButton: false
  };

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.pagination).length === 0) {
      this.setState({
        nextButton: false,
        previousButton: false
      });
    }
    if (nextProps.pagination.next) {
      this.setState({
        nextButton: true
      });
    } else {
      this.setState({
        nextButton: false
      });
    }
    if (nextProps.pagination.prev) {
      this.setState({
        previousButton: true
      });
    } else {
      this.setState({
        previousButton: false
      });
    }
  }

  handleChange = (filter) => {
    this.props.fetchMembers(filter);
  };

  handleNextButton = () => {
    this.props.paginateMembers(this.props.pagination.next);
  };

  handlePreviousButton = () => {
    this.props.paginateMembers(this.props.pagination.prev);
  };

  componentDidMount() {
    this.props.fetchMembers(initialState());
  };

  handleSearch = (zipcode) => {
    this.props.fetchMembersByZipcode(zipcode);
  };

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <Segment>
            <Header as='h3'>
              <Icon name='search'/> Look in my area
            </Header>
            <Zipcode search={this.handleSearch}/>
          </Segment>
          <Divider/>
          <Segment>
            <Header as='h3'>
              <Icon name='filter'/> Filter Members
            </Header>
            <MembersFilter onChangeHandle={this.handleChange}/>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          {
            this.props.loading ? <Loader active inline='centered'/> : (
              <div>
                <ContainerNavigation previousButton={this.state.previousButton} handlePreviousButton={this.handlePreviousButton} nextButton={this.state.nextButton} handleNextButton={this.handleNextButton} text='Members'/>
                <Segment vertical>
                  <MembersList members={this.props.members}/>
                </Segment>

                <ContainerNavigation previousButton={this.state.previousButton} handlePreviousButton={this.handlePreviousButton} nextButton={this.state.nextButton} handleNextButton={this.handleNextButton} text='Members'/>
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
    pagination: state.members.pagination,
    loading: state.members.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MemberActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer);
