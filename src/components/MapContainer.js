import React from 'react';
import USAMap from 'react-usa-map';
import { Grid, Header, Icon, Label, List } from 'semantic-ui-react';
import { getPartiesRepresentation, transformFilling } from '../adapters/representations';
import MapFeedList from './map/FeedList';

class MapContainer extends React.Component {
  state = {
    statesFilling: {}
  };

  componentDidMount() {
    getPartiesRepresentation().then((data) => {
      this.setState({statesFilling: transformFilling(data, 'house')});
    });
  }

  handleMap = (event) => {
    console.log(event.target.dataset.name);
  };

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <Header as='h2'>
            <Icon name='map' />
            <Header.Content>
              USA Representatives Map
            </Header.Content>
            <Header.Subheader>
              Colors represent the <strong>simple</strong> majority of each state
            </Header.Subheader>
          </Header>
          <List>
            <List.Item><Label style={{backgroundColor: 'rgba(25,125,215, 1)', color: '#FFFFFF'}}>D</Label> Democratic Party</List.Item>
            <List.Item><Label style={{backgroundColor: 'rgba(252,67,73, 1)', color: '#FFFFFF'}}>R</Label> Republican Party</List.Item>
            <List.Item><Label style={{backgroundColor: '#6F4C91', color: '#FFFFFF'}}>=</Label> Equal amount of Democrats and Republicans</List.Item>
          </List>
          <div className='usa-map' style={{overflowX: 'scroll', textAlign: 'center'}}>
            <USAMap width={650} height={385} customize={this.state.statesFilling} title='Map of House Representation' onClick={this.handleMap}/>
          </div>
        </Grid.Column>
        <Grid.Column width={6}>

        </Grid.Column>
      </Grid>
    );
  }
}

export default MapContainer;