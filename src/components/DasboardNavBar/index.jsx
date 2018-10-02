import React from 'react';

// import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const DashboardNavBar = ({ title }) => {
  return (
    <AppBar position="static" color="default">
    <Toolbar>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
    </Toolbar>
    </AppBar>
  );
}

DashboardNavBar.propTypes = {};

export default DashboardNavBar;