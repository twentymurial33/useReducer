const initialState = {
  todos: [
    { id: 1, value: "Buying groceries" },
    { id: 2, value: "shopping" },
    { id: 3, value: "playing piano" },
    { id: 4, value: "walking bella" },
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
