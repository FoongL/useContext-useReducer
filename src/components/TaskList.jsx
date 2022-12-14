import { useContext } from "react";
import { TodosContext, ToDoListContext } from "../provider/ToDoProvider";
import { deleteAction, markAction } from "../reducer/todo";


function TaskList() {
  const {ToDoDispatch: dispatch, todoList: tasks} = useContext(TodosContext);

  // Dispatch the mark action that affects the todoList state in the
  // App component.
  const dispatchMark = (id, value) => {
    dispatch(markAction(id, value));
  };

  return (
    <ol>
      {tasks.length > 0 ? (
        tasks.map((task, i) => {
          return (
            <div style={{borderStyle: 'solid'}}>
            <li key={i}>
              {/* <span className={task.done && `cross-out`}>{task.name}</span>{" "} */}
              {!task.done && (
                <div style={{marginBottom: '1%', marginTop:'1%'}}>
                <span className={task.done && `cross-out`}>{task.name}</span>{" "}
                <br/>
                <p>Assigned To: {task.assignedTo} </p>
                <br/>
                <button
                  id={i}
                  className="baseButton done"
                  onClick={() => dispatchMark(i, true)}
                >
                  Done
                </button>
                <br/>
                </div>
              )}
              {task.done && (
                <div style={{marginBottom: '1%', marginTop:'1%'}}>
                <span className={task.done && `cross-out`} style={{textDecoration:'line-through'}}>{task.name}</span>{" "}
                <br/>
                <p>Assigned To: {task.assignedTo} </p>
                <br/>
                <button
                  id={i}
                  className="baseButton undo"
                  onClick={() => dispatchMark(i, false)}
                >
                  Undo
                </button>
                </div>
              )}
              {/* The delete button dispatches the delete action. */}
              <button
                id={i}
                className="baseButton delete"
                onClick={() => dispatch(deleteAction(i))}
                
              >
                Delete
              </button>
              <br/>
            </li>
            </div>
          );
        })
      ) : (
        <p>I have no tasks...</p>
      )}
    </ol>
  );
}

export default TaskList;
