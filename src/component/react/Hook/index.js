import React, { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `click ${count} time`;
        return () => {
            document.title = "react-webpack";
        };
    });
    return (
        <div>
            <p>you click {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                click me
            </button>
        </div>
    );
}

export default Example;
