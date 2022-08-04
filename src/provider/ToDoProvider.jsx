import React, { useReducer } from "react";

import {
    toDoReducer,
    initialState
} from '../reducer/todo'
// import {ThemeContext} from './App'

// Create empty global state
export const TodosContext = React.createContext();
export const ToDoListContext = React.createContext()

const ToDoProvider = ({ children }) => {
  // todoList is the state variable, and dispatch is the function we can
  // use to manipulate todoList. The dispatch function wraps the toDoReducer
  // reducer function passed to useReducer.
  const [todoList, ToDoDispatch] = useReducer(toDoReducer, initialState);


  return (
    <TodosContext.Provider value={ToDoDispatch}>
        <ToDoListContext.Provider value={todoList} >
        {children}
        </ToDoListContext.Provider>
    </TodosContext.Provider>
  );
};

export default ToDoProvider