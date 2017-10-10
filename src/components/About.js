import React from 'react';
import { Grid, Paper } from 'material-ui';

const About = () => {
  return (
    <Grid container className="grid-container members-container" spacing={24}>
      <Grid item xs={12} sm={4} md={3} className="grid-item left-sidebar">
        <Paper elevation={1}>Left</Paper>
      </Grid>
      <Grid item xs={12} sm={4} md={6} className="grid-item middle-container">
        <Paper elevation={1}>
          This website was developed by <a href="http://gabriela.io" title="Gabriela Ferrara">Gabriela Ferrara</a> with
          educational purposes with data provided by <a href="http://www.propublica.org" title="ProPublica">ProPublica</a>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} md={3} className="grid-item left-sidebar">
        <Paper elevation={1}>Right</Paper>
      </Grid>
    </Grid>
  );
};

export default About;