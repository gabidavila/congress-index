import React from 'react';
import { Grid } from 'semantic-ui-react';

const MainContainer = (props) => {
  return (
    <Grid stackable columns={3}>
      <Grid.Column width={1}>

      </Grid.Column>
      <Grid.Column width={14}>
        {props.children}
      </Grid.Column>
      <Grid.Column width={1}>

      </Grid.Column>
    </Grid>
  );
};

export default MainContainer;