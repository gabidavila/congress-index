import React from 'react';
import USAMap from 'react-usa-map';
import { Grid } from 'semantic-ui-react';
import { getPartiesRepresentation, transformFilling } from '../adapters/representations';

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
      <Grid stackable columns={3}>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10} style={{overflowX: 'scroll'}}>
          <USAMap width={650} height={385} customize={this.state.statesFilling} title='Map of House Representation' onClick={this.handleMap}/>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MapContainer;