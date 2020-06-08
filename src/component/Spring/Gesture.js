import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const GestureDemo = () => {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
    const bind = useDrag(({ down, delta }) => set({ xy: down ? delta : [0, 0] }));
    return (
        <animated.div
            {...bind()}
            style={{
                transform:    xy.interpolate((x, y) => `translate3D(${x}px, ${y}px, 0)`),
                background:   "lightblue",
                borderRadius: "50%",
                width:        "100px",
                height:       "100px"
            }}
        />
    );
};

export default GestureDemo;
