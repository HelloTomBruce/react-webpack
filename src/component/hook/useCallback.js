import React, { useState, useCallback } from "react";

const CallBackExample = () => {
    let [count, setCount] = useState(0);
    let [sum, setSum] = useState(0);
    const memorized = useCallback(() => {
        return sum;
    }, [count]);
    return (
        <div>
            <div>
                count: {count}
                sum: {sum}
                memorized: {memorized()}
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>count +</button>
                <button onClick={() => setSum(sum + 1)}>sum +</button>
            </div>
        </div>
    );
};

export default CallBackExample;
