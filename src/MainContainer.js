import React from 'react';
import { Grid } from 'semantic-ui-react';
import TopMenuBar from './components/interface/TopMenuBar';

const MainContainer = (props) => {
  return (
    <div>
      <TopMenuBar/>
      <Grid stackable style={{ marginTop: '3.5em' }} columns={3}>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={14}>
          {props.children}
        </Grid.Column>
        <Grid.Column width={1}>

        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainContainer;