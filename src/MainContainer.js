import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import TopMenuBar from './components/interface/TopMenuBar';

const MainContainer = (props) => {
  return (
    <div>
      <TopMenuBar />
      <Grid stackable columns={3}>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={14}>
          {props.children}
          <Divider />
          <div style={{textAlign: 'center', fontSize: '10px'}}>
            Data obtained through <a href="https://projects.propublica.org/api-docs/congress-api/">
            ProPublica Congress API</a>. This website is subject to their Terms of
            Use according to their licensing. Information here is not guaranteed
            to be up-to-date and some inaccuracies may be present.
          </div>
        </Grid.Column>
        <Grid.Column width={1}>

        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainContainer;
