import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), text: action.text, completed: false }];
    case 'TOGGLE':
      return state.map((e) => {
        if (e.id === action.id) {
          return { id: e.id, text: e.text, completed: !e.completed };
        } else {
          return e;
        }
      });
    case 'DELETE':
      return state.filter((e) => e.id !== action.id);

    case 'EDIT': {
      return state.map((e) => {
        if (e.id === action.id) {
          return { id: e.id, text: action.text, completed: e.completed };
        } else {
          return e;
        }
      });
    }
    default:
      return state;
  }
};

export const TaskContext = createContext();
export const TaskMethodsContext = createContext();

export function TaskProvider(props) {
  const [tasks, dispatch] = useReducer(taskReducer, JSON.parse(window.localStorage.getItem('tasks')) || []);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify([...tasks]));
    console.log(JSON.parse(window.localStorage.getItem('tasks')));
  }, [tasks]);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskMethodsContext.Provider value={dispatch}>{props.children}</TaskMethodsContext.Provider>
    </TaskContext.Provider>
  );
}
