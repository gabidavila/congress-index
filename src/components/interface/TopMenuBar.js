import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

const TopMenuBar = () => {
  return (
    <AppBar elevation={1} position="static" className="top-menu">
      <Toolbar>
        <Typography type="title" color="inherit">
          Congress Index
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenuBar;