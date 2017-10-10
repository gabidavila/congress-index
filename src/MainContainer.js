import React from 'react';
import { Grid, Paper } from 'material-ui';
import TopMenuBar from './components/interface/TopMenuBar';

const MainContainer = (props) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <TopMenuBar/>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={1} className="left-gutter">
        </Grid>
        <Grid item xs={10} className="content">
          {props.children}
          <Grid item xs={12} className="grid-item foot-bar">
            <Paper elevation={1}>Bottom</Paper>
          </Grid>
        </Grid>
        <Grid item xs={1} className="right-gutter">
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContainer;