export const initialState = [
  {
    name: "Fully understand useContext + useReducer",
    done: false,
  },
];

const GET = "GET";
const ADD = "ADD";
const MARK = "MARK";
const DELETE = "DELETE";

export function toDoReducer(state, action) {
  switch (action.type) {
    case GET:
      return state;
    case ADD:
      return [...state, action.payload.task];
    case MARK:
      return state.map((task, i) => {
        if (i === action.payload.taskId)
          return { ...task, done: action.payload.done };

        return task;
      });
    case DELETE:
      return state.filter((_task, i) => action.payload.taskId !== i);
    default:
      return state;
  }
}

// The following action-generating functions are commonly referred to
// as "action creators". They accept any input relevant to the action,
// and return an object that represents that action, which is typically
// passed to the dispatch function. Actions always contain a type attribute
// used to identify the action and tell the reducer what logic to run.
export function getAction() {
  return {
    type: GET,
    payload: {},
  };
}
export function addAction(taskText) {
  return {
    type: ADD,
    payload: {
      task: {
        name: taskText,
        done: false,
      },
    },
  };
}

export function markAction(taskId, done) {
  return {
    type: MARK,
    payload: {
      taskId,
      done,
    },
  };
}

export function deleteAction(taskId) {
  return {
    type: DELETE,
    payload: {
      taskId,
    },
  };
}
