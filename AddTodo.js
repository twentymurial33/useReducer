import { useState } from "react";
import { ACTIONS } from "./reducer";

function AddTodo(props) {
  const { dispatch } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTIONS.CREATE,
            payload: todoValue,
          });
          console.log(todoValue);
          setTodoValue("");
        }}
      >
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          type="text"
          placeholder="Add a todo"
          value={todoValue}
        />
        &nbsp;
        <button type="submit">Add a Todo</button>
      </form>
    </>
  );
}

export default AddTodo;
