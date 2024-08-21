import { useReducer } from "react";

function reducerFunc(state, action) {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  } else {
    return 0;
  }
}

const useReducerHook = () => {
  const [count, dispatch] = useReducer(reducerFunc, 0);
  return (
    <>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Plus
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Minus
        </button>
      </div>
    </>
  );
};

export default useReducerHook;
