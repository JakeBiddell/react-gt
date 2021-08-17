import React from 'react';
import FadeIn from './FadeIn';

const speed = '0.4';

const Highlight = ({ boundaries: { top, left, height, width } }: { boundaries: DOMRect }) => (
    <FadeIn
        style={{
            left: 0,
            right: 0,
            transform: `translate(${left - 10}px, ${top - 10}px)`,
            position: 'fixed',
            width: `${width + 20}px`,
            height: `${height + 20}px`,
            borderRadius: '8px',
            boxShadow: '0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)',
            zIndex: 999998,
            transition: `transform ${speed}s ease, height ${speed}s ease, width ${speed}s ease`,
        }}
    />
);

export default React.memo(Highlight);
