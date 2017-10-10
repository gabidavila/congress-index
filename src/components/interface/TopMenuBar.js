import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { yellow } from 'material-ui/colors';

const TopMenuBar = () => {
  return (
    <AppBar elevation={1} position="static" style={{ backgroundColor: yellow[700] }} className="top-menu">
      <Toolbar>
        <img src="/images/logo.png" alt="Congress Browser"/>
        <Typography type="title" color="inherit">
          Congress Browser
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenuBar;