import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

function Header(props) {
  return (
    <AppBar position="static">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        style={{ fontFamily: 'cambria', fontWeight: 'bold' }}
      >
        PHRASE SMITH
      </Typography>
    </AppBar>
  );
}
export default Header;
