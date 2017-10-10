import React, { Component } from 'react';
import { Grid } from 'material-ui';
import MembersContainer from './components/MembersContainer';
import TopMenuBar from './components/interface/TopMenuBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid container item xs={12}>
            <Grid item xs={1} className="left-gutter">
            </Grid>
            <Grid item xs={10} className="content">
              <TopMenuBar/>
              <MembersContainer/>
            </Grid>
            <Grid item xs={1} className="right-gutter">
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
