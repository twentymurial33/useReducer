import { useReducer } from "react";
import { reducerFunction, initialState } from "./reducer";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";

export default function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <h1>Murial's ToDos</h1>
      <UpdateTodo dispatch={dispatch} />
      {state.todos.map((todo) => (
        <AddTodo key={todo.uuid} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}
