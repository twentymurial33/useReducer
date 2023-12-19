import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), value: "Buying groceries" },
    { id: uuidv4(), value: "shopping" },
    { id: uuidv4(), value: "playing piano" },
    { id: uuidv4(), value: "walking bella" },
  ],
};

const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
    }
    case ACTIONS.UPDATE: {
    }
    case ACTIONS.DELETE: {
    }
  }
};

export { reducerFunction, ACTIONS, initialState };
