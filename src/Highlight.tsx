import React from 'react';
import FadeIn from './FadeIn';

const speed = '0.4';

const Arrow = ({ x, y, rotation }: { x: number; y: number; rotation: number }) => (
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
                <path
                    x="50"
                    transform={`rotate(${rotation} 50 50), translate(${y} ${x}), scale(5 5)`}
                    transform-origin="4 4"
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                />
            </mask>
        </defs>

        <rect id="donut" x="0" y="0" width="100%" height="100%" mask="url(#hole)" />
    </svg>
);

const Highlight = ({ boundaries: { top, left, height, width } }: { boundaries: DOMRect }) => (
    <FadeIn style={{ zIndex: 999998, position: 'absolute' }}>
        {(() => {
            if (top < -height) {
                return <Arrow x={-(left + width / 2 - 50)} y={0} rotation={90} />;
            }
            if (top > window.innerHeight + window.scrollY - 10) {
                return (
                    <Arrow
                        x={left + width / 2 - 50}
                        y={-(window.innerHeight - 120)}
                        rotation={270}
                    />
                );
            }
            if (left > window.innerWidth + window.scrollX - 10) {
                return (
                    <Arrow
                        x={-(top + height / 2 - 65)}
                        y={-(window.innerWidth - 120)}
                        rotation={180}
                    />
                );
            }
            if (left < -width) {
                return <Arrow x={top + height / 2 - 50} y={0} rotation={0} />;
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
