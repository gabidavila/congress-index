import React from 'react';
import CompareSearch from './compare/Search';
import { Grid, Header, Icon } from 'semantic-ui-react';

class CompareContainer extends React.Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Header as='h1' dividing>
            <Icon name='users'/>
            <Header.Content>
              Compare members of the House or Senate
              <Header.Subheader>
                Choose two members to start
              </Header.Subheader>
            </Header.Content>
          </Header>
          <CompareSearch chamber='senate'/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CompareContainer;
