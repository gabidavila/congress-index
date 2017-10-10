import React from 'react';
import { Grid, Paper } from 'material-ui';

class MembersContainer extends React.Component {
  render() {
    return (
      <Grid container className="grid-container members-container" spacing={24}>
        <Grid item xs={12} sm={6} md={3} className="grid-item left-sidebar">
          <Paper elevation={1}>Left</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={9} className="grid-item middle-container">
          <Paper elevation={1}>Middle</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default MembersContainer;
