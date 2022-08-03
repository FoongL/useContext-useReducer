import { useContext } from "react";
import { TodosContext, ToDoListContext } from "../provider/ToDoProvider";
import { deleteAction, markAction } from "../todo";


function TaskList() {
  const tasks = useContext(ToDoListContext);
  // Retrieve the dispatch function from global state with useContext
  const dispatch = useContext(TodosContext);

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
            <li key={i}>
              {/* <span className={task.done && `cross-out`}>{task.name}</span>{" "} */}
              {!task.done && (
                <div>
                <span className={task.done && `cross-out`}>{task.name}</span>{" "}
                <button
                  id={i}
                  className="baseButton done"
                  onClick={() => dispatchMark(i, true)}
                >
                  Done
                </button>
                </div>
              )}
              {task.done && (
                <div>
                <span className={task.done && `cross-out`} style={{textDecoration:'line-through'}}>{task.name}</span>{" "}
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
            </li>
          );
        })
      ) : (
        <p>I have no tasks...</p>
      )}
    </ol>
  );
}

export default TaskList;
