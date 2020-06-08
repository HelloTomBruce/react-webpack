import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

const SpringDemo = () => {
    const fadeProps = useSpring({
        opacity: 1,
        from:    {
            opacity: 0
        }
    });
    const numberProps = useSpring({
        number: 1,
        from:   {
            number: 0
        }
    });
    const { o, xyz, color } = useSpring({
        config: {
            duration: 2000
        },
        from: {
            o:     0,
            xyz:   [0, 0, 0],
            color: "red"
        },
        o:     1,
        xyz:   [10, 20, 5],
        color: "green"
    });
    return (
        <div>
            <animated.div style={fadeProps}>I will fade in</animated.div>
            <animated.span>{numberProps.number}</animated.span>
            <animated.div
                style={{
                    color,
                    background:  o.interpolate(o => `rgba(210, 57, 77, ${o})`),
                    transform:   xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
                    border:      interpolate([o, color], (o, c) => `${o * 10}px solid ${c}`),
                    padding:     o.interpolate({ range: [0, 0.5, 1], output: [0, 0, 10] }).interpolate(o => `${o}%`),
                    borderColor: o.interpolate({ range: [0, 1], output: ["red", "#ffaabb"] }),
                    opacity:     o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1])
                }}
            >
                {o.interpolate(n => n.toFixed(2))}
            </animated.div>
        </div>
    );
};

export default SpringDemo;
