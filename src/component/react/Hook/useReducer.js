import React, { useReducer } from "react";

function countReducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.payload.count
            };
        case "decrement":
            return {
                count: state.count - action.payload.count
            };
        default:
            return state;
    }
}

function initState(initState) {
    return {
        ...initState
    };
}

function Counter() {
    const [state, dispatch] = useReducer(countReducer, { count: 1 }, initState);
    return (
        <div>
            <button
                onClick={() =>
                    dispatch({ type: "increment", payload: { count: 2 } })
                }
            >
                add
            </button>
            {state.count}
            <button
                onClick={() =>
                    dispatch({ type: "decrement", payload: { count: 2 } })
                }
            >
                dec
            </button>
        </div>
    );
}

export default Counter;
