import { useState, useContext, useEffect } from "react";
import { TodosContext } from "../provider/ToDoProvider";
import { addAction } from "../reducer/todo";

const TaskForm = () => {
  // The TaskForm component has local state managed by useState
  const [task, setTask] = useState("");
  // Retrieve the dispatch function from global state with useContext
  const { ToDoDispatch: dispatch } = useContext(TodosContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // On form submit, run dispatch function with the add action object
    // generated by the addAction function to add a task to the todoList
    // state stored in the App component. The action object tells dispatch
    // which action to run to manipulate the state. We define the behaviours
    // of each action in the reducer function toDoReducer.
    dispatch(
      await addAction(task) /* this will give me the APPROPRIATE object**/
    );
    /* Same as:
    dispatch({
      type: "ADD",
      payload:{
        task:{
          name: task,
          done: false
        }
      }
    })
    **/

    // Reset the local task form state
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="task"
          className="add-task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          autoComplete="off"
          value={task}
          placeholder="Add a task"
        />
        <button className="baseButton add" type="submit">
          Add
        </button>
      </p>
    </form>
  );
};

export default TaskForm;
