import React, { useContext } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

import { ThemeContext } from './contexts/theme.context';
import { TaskContext } from './contexts/task.context';

import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

export default function Main() {
  const { darkMode } = useContext(ThemeContext);
  const tasks = useContext(TaskContext);

  const useStyles = makeStyles({
    main: {
      flexGrow: 1,
      backgroundColor: darkMode ? '#121212' : 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    container: {
      width: '50%',
      minHeight: '400px',
      backgroundColor: darkMode ? 'rgb(56, 56, 56)' : 'white',
      color: darkMode ? 'white' : 'black',
    },
    '@media (max-width: 600px)': {
      container: {
        width: '90%',
        minHeight: '75vh',
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Paper elevation={3} className={classes.container}>
        <TaskForm />
        <div className={'tasks'}>
          {tasks.map((e) => {
            return (
              <Task {...e} key={e.id}>
                {e.text}
              </Task>
            );
          })}
        </div>
      </Paper>
    </div>
  );
}
