import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { TaskMethodsContext } from './contexts/task.context';
import { ThemeContext } from './contexts/theme.context';

export default function EditTaskForm(props) {
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useContext(TaskMethodsContext);

  const useStyles = makeStyles({
    form: {
      flexGrow: 1,
      border: 'none',
      fontSize: '1rem',
      color: darkMode ? 'white' : 'black',
      backgroundColor: '#FFFFFF00',
      padding: 0,
      margin: 0,
      height: '20px',
      textDecoration: 'underline',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    },
  });

  const classes = useStyles();

  return (
    <input
      value={props.value}
      className={classes.form}
      type="text"
      onChange={(e) => dispatch({ type: 'EDIT', text: e.target.value, id: props.id })}
    />
  );
}
