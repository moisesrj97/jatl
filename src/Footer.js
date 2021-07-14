import { makeStyles } from '@material-ui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  const useStyles = makeStyles({
    footer: {
      backgroundColor: darkMode ? '#121212' : 'white',
      color: darkMode ? 'white' : 'black',
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        color: darkMode ? '#00e5ff' : null,
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <p>
        <strong>JATL!</strong> (Just Another Task List). Made with 💚 by <a href="https://www.github.com/moisesrj97"> Moisés</a>
      </p>
    </div>
  );
}
