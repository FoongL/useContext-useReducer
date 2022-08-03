import './App.css';
// We can use useState alongside useReducer
import React from 'react';

// import components
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// import Provider
import ToDoProvider from './provider/ToDoProvider'


// // State-management code is in ./todo
// import {
//   toDoReducer,
//   initialState,
//   addAction,
//   markAction,
//   deleteAction,
// } from './todo';



export default function App() {

  return (
    // Set the value of global state the dispatch function to make
    // the dispatch function available in all components without
    // passing props.
    <ToDoProvider>
      <div className="App">
        <TaskForm />
        <h3>Tasks</h3>
        <TaskList/>
      </div>
    </ToDoProvider>
  );
}


