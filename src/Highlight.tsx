import React from 'react';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const speed = '0.4';

type ArrowProps = { x: number; y: number; rotation: number; scrollToElement: () => void };
const Arrow = ({ x, y, rotation, scrollToElement }: ArrowProps) => {
    const ref = useRef(undefined as SVGPathElement);
    const { height, width, top, left } = ref.current?.getBoundingClientRect() ?? {};
    return (
        <>
            <div
                onClick={e => {
                    scrollToElement();
                    e.stopPropagation();
                }}
                style={{
                    cursor: 'pointer',
                    position: 'fixed',
                    zIndex: 999998,
                    height,
                    width,
                    top,
                    left,
                }}
            />
            <svg
                width="1000vw"
                height="1000vh"
                background-color="red"
                style={{
                    left: 0,
                    right: 0,
                    position: 'fixed',
                    transition: `transform ${speed}s ease, height ${speed}s ease, width ${speed}s ease`,
                    pointerEvents: 'none',
                }}
            >
                <defs>
                    <mask id="hole">
                        <rect width="100%" height="100%" fill="rgba(255, 255, 255, .8)" />
                        <path // this is the path that creates the arrow shape
                            ref={ref}
                            x="50"
                            transform={`rotate(${rotation} 50 50), translate(${y} ${x}), scale(5 5)`} // transform the arrow to be in the correct position
                            transform-origin="4 4" // offset origin to make roation easier
                            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                        />
                    </mask>
                </defs>

                {/* create a rectangle that covers 100% of the screen. use the hole mask to remove the arrow shape from the rectangle */}
                <rect x="0" y="0" width="100%" height="100%" mask="url(#hole)" />
            </svg>
        </>
    );
};

type HighLightProps = { boundaries: DOMRect; scrollToElement: () => void };
const Highlight = ({
    boundaries: { top, left, height, width },
    scrollToElement,
}: HighLightProps) => (
    <FadeIn style={{ zIndex: 999997, position: 'absolute' }}>
        {(() => {
            // if the element is above the client view show the up arrrow at the top of the screen
            if (top < -height) {
                return (
                    <Arrow // Up Arrow
                        scrollToElement={scrollToElement}
                        x={-(left + width / 2 - 60)} // align horizontally with element
                        y={0} // align to the bottom
                        rotation={90} // turn the arrow to point up
                    />
                );
            }
            // if the element is beneath the client view show the down arrrow at the bottom of the screen
            if (top > window.innerHeight - 10) {
                return (
                    <Arrow // Down Arrow
                        scrollToElement={scrollToElement}
                        x={left + width / 2 - 60} // align horizontally with element
                        y={-(window.innerHeight - 120)} // align to the top
                        rotation={270} // turn the arrow to point down
                    />
                );
            }
            // if the element is right of the client view show the right arrow to the right of the screen
            if (left > window.innerWidth - 10) {
                return (
                    <Arrow // Right Arrow
                        scrollToElement={scrollToElement}
                        x={-(top + height / 2 - 60)} // align vertically with element
                        y={-(window.innerWidth - 120)} // align to the right
                        rotation={180} // turn the arrow to point right
                    />
                );
            }
            // if the element is left of the client view show the left arrow to the left of the screen
            if (left < -width) {
                return (
                    <Arrow // Left Arrow
                        scrollToElement={scrollToElement}
                        x={top + height / 2 - 60} // align vertically with element
                        y={0} // align to the left
                        rotation={0} // turn the arrow to point left
                    />
                );
            }
            return (
                <div
                    style={{
                        left: 0,
                        right: 0,
                        transform: `translate(${left - 10}px, ${top - 10}px)`,
                        position: 'fixed',
                        width: `${width + 20}px`,
                        height: `${height + 20}px`,
                        borderRadius: '8px',
                        boxShadow: '0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)',
                        transition: `transform ${speed}s ease, height ${speed}s ease, width ${speed}s ease`,
                    }}
                />
            );
        })()}
    </FadeIn>
);

export default React.memo(Highlight);
