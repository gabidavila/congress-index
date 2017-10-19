import _ from 'lodash';
import React from 'react';
import { Grid, Search, Label, Segment, Button } from 'semantic-ui-react';
import { getAllMembers, compareMembers } from '../../adapters/congress';
import { parties } from '../../helpers/congress';
import MemberList from '../members/List';
import CompareResults from './Results';

class CompareSearch extends React.Component {
  componentWillMount() {
    this.resetSearch();
  }

  resetSearch = () => {
    this.setState({
      isLoading: false,
      results: [],
      value: '',
      members: [],
      comparison: null,
      isComparable: false
    });
  };

  renderer = ({ state, image, title, description, party }) => {
    return ([
      image && <div key='image' className='image'>
        <img src={image} ref={img => this.img = img} alt={title} onError={() => {
          this.img.src = '/images/default_user.png';
        }}/>
      </div>,
      <div key='content' className='content'>
        {state &&
        <Label circular style={{ float: 'left', marginRight: '5px' }} color={parties[party].color}>{party}</Label>}
        {title && <div className='title'>{title}</div>}
        {description && <div className='description'>{description}</div>}
      </div>,
    ]);
  };

  buildResult = (members) => {
    const results = members.map((member) => {
      return {
        id: member.attributes['pp-member-id'],
        key: member.attributes['pp-member-id'],
        state: member.attributes['state']['state'],
        member: member,
        party: member.attributes.party,
        title: member.attributes['full-name'],
        description: `${member.attributes.state['state']} - ${member.attributes['propublica-profile']['title']}`,
        image: member.attributes['twitter-picture-url']
      };
    });
    this.setState({ results });
  };

  handleResultSelect = (event, resultObject) => {
    this.setState({ value: '', members: [...this.state.members, resultObject.result.member], results: [] });
  };

  handleSearchChange = (event, searchObject) => {
    this.setState({ isComparable: false });
    if (searchObject.minCharacters > searchObject.value.length) {
      this.setState({ value: searchObject.value });
      return;
    }

    if (this.state.members.length === 2) {
      this.setState({ isComparable: true });
      return;
    }

    this.setState({ isLoading: true, value: searchObject.value }, () => {
      getAllMembers({ name: this.state.value, congress: this.props.chamber }).then((results) => {
        this.buildResult(results.data);
        this.setState({ isLoading: false });
      });
    });
  };

  handleCompare = () => {
    if (this.state.members.length !== 2) {
      return;
    }
    compareMembers(this.state.members, this.props.chamber)
      .then((results) => {
        this.setState({ comparison: results });
      });
  };

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          {this.state.members.length < 2 ?
            <div className='searchbar'>
              <Search fluid
                placeholder='Search for member...'
                name={this.props.chamber}
                minCharacters={3}
                className='first'
                loading={this.state.isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={this.state.results}
                value={this.state.value}
                resultRenderer={this.renderer}
              />
            </div>
            : null}
        </Grid.Column>
        <Grid.Column width={6}>
          {this.state.members.length ?
            <Segment>
              <MemberList members={this.state.members} columns={2}/>
              <br/>
              <Button onClick={this.resetSearch} fluid color='black'>Reset</Button>
              <br/>
              <Button onClick={this.handleCompare} disabled={this.state.isComparable} fluid
                color='teal'>Compare</Button>
            </Segment>
            : null}
        </Grid.Column>
        <Grid.Column width={10}>
          {this.state.comparison ?
            <CompareResults members={_.zipObject(['first_member', 'second_member'], this.state.members)}
              data={this.state.comparison}/>
            : null
          }
        </Grid.Column>
      </Grid>
    );
  }
}

export default CompareSearch;