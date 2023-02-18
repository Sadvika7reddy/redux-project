import { createStore } from "redux";

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 5};
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 5 };
  }
  return state;
};

const store = createStore(reducer);

export default store;
