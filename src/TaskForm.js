import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { ThemeContext } from './contexts/theme.context';
import { TaskMethodsContext } from './contexts/task.context';
import { makeStyles } from '@material-ui/core';

export default function TaskForm() {
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useContext(TaskMethodsContext);

  const [text, setText] = useState('');

  const useStyles = makeStyles({
    root: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: darkMode ? 'white' : 'black',
        },
      },
      '& .MuiInputLabel-outlined': {
        color: darkMode ? '#ffffff70' : null,
      },
      '& .MuiOutlinedInput-input': {
        color: darkMode ? 'white' : 'black',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: darkMode ? '#5bfffc' : null,
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: darkMode ? '#5bfffc' : null,
      },
    },
    input: {
      width: '95%',
      color: 'white',
    },
  });

  const handleSubmit = () => {
    if (text !== '') {
      dispatch({ type: 'ADD', text: text });
      setText('');
    } else {
      alert('Please, no empty tasks');
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        label="New Task...?"
        variant="outlined"
        value={text}
        onChange={(evt) => {
          setText(evt.target.value);
        }}
        onKeyUp={(evt) => {
          evt.code === 'Enter' && handleSubmit();
        }}
      />
    </div>
  );
}
