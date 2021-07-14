import { makeStyles } from '@material-ui/core';
import React, { useContext, memo, useState } from 'react';

import EditTaskForm from './EditTaskForm';

import { ThemeContext } from './contexts/theme.context';
import { TaskMethodsContext } from './contexts/task.context';

import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Task(props) {
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useContext(TaskMethodsContext);

  const [editing, setEditing] = useState(false);

  const useStyle = makeStyles({
    root: {
      '& .MuiCheckbox-colorPrimary.Mui-checked': {
        color: darkMode ? '#5bfffc' : null,
      },
    },

    task: {
      padding: '15px 30px',
      margin: '5px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& p': {
        margin: 0,
        height: '20px',
        flexGrow: 1,
        textDecoration: props.completed ? 'line-through' : 'none',
        opacity: props.completed ? 0.5 : 1,
        fontSize: '1rem',
      },
      '&:hover $edit': {
        transform: 'scale(1)',
        opacity: 1,
        transition: 'all 0.3s linear',
      },
      '&:hover $delete': {
        transform: 'scale(1)',
        opacity: 1,
        transition: 'all 0.3s linear',
      },
      backgroundColor: darkMode ? 'rgb(56, 56, 56)' : 'white',
      color: darkMode ? 'white' : 'black',
    },

    checkBox: {
      color: darkMode ? 'white' : 'black',
    },

    edit: {
      cursor: 'pointer',
      transform: 'scale(0.1)',
      opacity: 0,
      margin: '0 5px',
      '&:hover': {
        color: 'blue',
        transition: 'all 0.3s linear',
      },
    },

    delete: {
      cursor: 'pointer',
      transform: 'scale(0.1)',
      opacity: 0,
      margin: '0 5px',
      '&:hover': {
        color: 'red',
        transition: 'all 0.3s linear',
      },
    },
  });

  const classes = useStyle();

  return (
    <Paper elevation={2} className={classes.task}>
      <div className={classes.root}>
        <Checkbox
          className={classes.checkBox}
          color="primary"
          checked={props.completed}
          onChange={() => dispatch({ type: 'TOGGLE', id: props.id })}
        />
      </div>
      {editing ? <EditTaskForm value={props.text} id={props.id} /> : <p>{props.text}</p>}
      <EditIcon className={classes.edit} onClick={() => setEditing(!editing)} />
      <DeleteForeverIcon className={classes.delete} onClick={() => dispatch({ type: 'DELETE', id: props.id })} />
    </Paper>
  );
}

export default memo(Task);
