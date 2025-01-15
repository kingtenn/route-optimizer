import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RouteIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Route Optimizer
        </Typography>
        <Button color="inherit">Help</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
