import React, { useReducer } from "react";

// const initState = {
//     count: 0
// };

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

function Counter({ initState }) {
    const [state, dispatch] = useReducer(countReducer, initState);
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
