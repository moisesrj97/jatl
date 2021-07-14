import React, { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Brightness6Icon from '@material-ui/icons/Brightness6';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode ? 'rgb(56, 56, 56)' : '#3f50b5',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    swithContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    brigthnessIcon: {
      color: 'white',
      transform: darkMode ? 'scaleX(-1)' : null,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            JATL!
          </Typography>
          <div className={classes.swithContainer}>
            <Switch color="default" onChange={toggleDarkMode} />
            <Brightness6Icon className={classes.brigthnessIcon} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
