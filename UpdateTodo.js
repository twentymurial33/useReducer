import { useState } from "react";
import { ACTIONS } from "./reducer";

function UpdateTodo(props) {
  const { todo, dispatch } = props;
  const [isEdited, setIsEdited] = useState(false);
  const [displayValue, setDisplayValue] = useState(todo.value);
  console.log(todo.value);
  return (
    <div>
      {isEdited ? (
        <input
          value={displayValue}
          onChange={(e) => setDisplayValue(e.target.value)}
        />
      ) : (
        displayValue
      )}
      &nbsp;
      {isEdited ? (
        <span
          onClick={() => {
            dispatch({
              type: ACTIONS.UPDATE,
              payload: { id: todo.id, value: displayValue },
            });
            setIsEdited(false);
          }}
        >
          Save
        </span>
      ) : (
        <>
          <button
            onClick={() => {
              setIsEdited(true);
            }}
          >
            update
          </button>
          &nbsp;
          <button
            onClick={() => {
              dispatch({
                type: ACTIONS.DELETE,
                payload: { id: todo.id },
              });
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
export default UpdateTodo;
