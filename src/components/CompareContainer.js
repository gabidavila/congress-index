import React from 'react';
import { Grid, Search, Label } from 'semantic-ui-react';
import { getAllMembers } from '../adapters/congress';
import { parties } from '../helpers/congress';


class CompareContainer extends React.Component {
  state = {
    isLoading: false,
    results: [],
    value: '',
    house: [],
    senate: []
  };

  renderer = ({state, image, title, description, party }) => {
    return ([
      image && <div key='image' className='image'>
        <img src={image} ref={img => this.img = img} alt={title} onError={() => {
          this.img.src = '/images/default_user.png';
        }} />
      </div>,
      <div key='content' className='content'> {state && <Label circular style={{float: 'left', marginRight: '5px'}} color={parties[party].color}>{party}</Label>} {title && <div className='title'>{title}</div>}
        {description && <div className='description'>{description}</div>} </div>,
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
    this.setState({results});
  };

  handleResultSelect = (event, resultObject) => {
    this.setState({value: '', [resultObject.name]: [...this.state.house, resultObject.result.member], results: []});
  };

  handleSearchChange = (event, searchObject) => {
    if (searchObject.minCharacters > searchObject.value.length) {
      this.setState({value: searchObject.value});
      return;
    }
    this.setState({ isLoading: true, value: searchObject.value }, () => {
      getAllMembers({ name: this.state.value, congress: searchObject.name }).then((results) => {
        this.buildResult(results.data);
        this.setState({isLoading: false});
      });
    });
  };

  render () {
    console.log(this.state.results)
    return (
      <Grid stackable columns={1}>
        <Grid.Column width={16}>
          <div id='searchbar'>
            <Search fluid
              placeholder='Search for member...'
              name='house'
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
        </Grid.Column>
      </Grid>
    );
  }
}

export default CompareContainer;
