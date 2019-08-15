import React, { useRef } from "react";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./Swiper.less";

const pages = [
    "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

const Swiper = () => {
    let index = useRef(0);
    const [springs, set] = useSprings(pages.length, i => {
        return {
            x:       i * window.innerWidth,
            sc:      1,
            display: "block"
        };
    });
    const bind = useDrag(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2) {
            cancel((index.current = xDir > 0 ? (index.current > 0 ? index.current - 1 : 0) : index.current >= pages.length - 1 ? pages.length - 1 : index.current + 1));
        }
        set(i => {
            if (i < index.current || i > index.current + 1) return { display: "none" };
            const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
            const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
            return {
                x,
                sc,
                display: "block"
            };
        });
    });
    return (
        <div className="swiper-container">
            {springs.map(({ x, sc, display }, i) => {
                return (
                    <animated.div
                        {...bind()}
                        key={i}
                        style={{
                            display,
                            transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
                        }}
                    >
                        <animated.div
                            style={{
                                transform:       sc.interpolate(s => `scale(${s})`),
                                backgroundImage: `url(${pages[i]})`
                            }}
                        />
                    </animated.div>
                );
            })}
        </div>
    );
};

export default Swiper;
