import React, { useRef, useEffect } from "react";

const RefExample = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });
    return <input ref={inputRef} type="text" />;
};

export default RefExample;
