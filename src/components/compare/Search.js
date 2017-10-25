import _ from 'lodash';
import React from 'react';
import { Grid, Search, Label, Segment, Button, Dropdown } from 'semantic-ui-react';
import { getAllMembers, compareMembers } from '../../adapters/congress';
import { parties } from '../../helpers/congress';
import MemberList from '../members/List';
import CompareResults from './Results';

class CompareSearch extends React.Component {
  componentWillMount() {
    this.resetSearch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.members.length === 2 && this.props.members !== nextProps.members) {
      this.setState({members: nextProps.members}, () => this.compare());
    }
  }

  resetSearch = () => {
    this.setState({
      isLoading: false,
      results: [],
      value: '',
      members: [],
      comparison: null,
      isComparable: false,
      chamber: this.props.chamber,
      isChamberEnabled: true
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
        <div style={{ float: 'left' }}>
          <div className='title'>{title}</div>
          <div style={{ clear: 'both' }}></div>
          <div className='description'>{description}</div>
        </div>
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
    this.setState({ value: '', members: [...this.state.members, resultObject.result.member], results: [], isChamberEnabled: false });
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
      getAllMembers({ name: this.state.value, congress: this.state.chamber }).then((results) => {
        this.buildResult(results.data);
        this.setState({ isLoading: false });
      });
    });
  };

  handleChamberChange = (event, data) => {
    this.setState({chamber: data.value});
  };

  handleCompare = () => {
    if (this.state.members.length !== 2) {
      return;
    }
    this.compare();
  };

  compare = () => {
    const membersIds = this.state.members.map((member) => member['attributes']['pp-member-id']);
    compareMembers(membersIds, this.state.chamber)
      .then((results) => {
        this.setState({ comparison: results }, () => {
          this.props.onCompare(membersIds, this.state.chamber);
        });
      });
  };

  render() {
    return (
      <Grid stackable>
        {this.state.members.length < 2 ?
          [<Grid.Column width={3} key='congress-search'>
            <Dropdown className='remove-radius' fluid style={{float: 'left'}} selection name='congress' disabled={!this.state.isChamberEnabled} value={this.state.chamber}
              options={[{key: 'senate', text: 'Senate', value: 'senate'}, {key: 'house', text: 'House', value: 'house'}]}
              onChange={this.handleChamberChange}
            />
          </Grid.Column>,
          <Grid.Column width={13} key='member-search'>
            <div className='searchbar'>
              <Search fluid
                placeholder='Search for member...'
                name={this.props.chamber}
                minCharacters={3}
                className='remove-radius'
                loading={this.state.isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={this.state.results}
                value={this.state.value}
                resultRenderer={this.renderer}
              />
            </div>
          </Grid.Column>]
          : null}
        <Grid.Column width={6}>
          {this.state.members.length ?
            <Segment compact>
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