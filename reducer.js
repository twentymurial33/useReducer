import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), value: "Task 1" },
    { id: uuidv4(), value: "Task 2" },
    { id: uuidv4(), value: "Task 3" },
    { id: uuidv4(), value: "Task 4" },
    { id: uuidv4(), value: "Task 5" },
    { id: uuidv4(), value: "Task 6" },
  ],
};

const ACTIONS = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

function reducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE: {
      const newTodo = { id: uuidv4(), value: action.payload };
      const newTodos = state.todos.slice(0);
      newTodos.push(newTodo);
      const newState = { ...state, todos: newTodos };
      return newState;
    }
    case ACTIONS.UPDATE: {
      const updateTodo = action.payload.id;
      const updatedTodo = state.todos.map((todo) => {
        if (todo.id === updateTodo.id) {
          return { ...todo, ...updateTodo };
        }
        return todo;
      });
      const newState = { ...state, todos: updatedTodo };
      return newState;
    }
    case ACTIONS.DELETE: {
      const todoItemId = action.payload.id;
      const newTodos = state.todos.filter((todo) => todo.id !== todoItemId);
      const newState = { ...state, todos: newTodos };
      return newState;
    }
    default:
      throw Error("Please choose an action");
  }
}

export { reducerFunction, ACTIONS, initialState };
