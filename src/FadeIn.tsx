import React, { useState, useEffect } from 'react';

const FadeIn = ({ children, style }: { children?: JSX.Element; style?: React.CSSProperties }) => {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 0);
    }, []);
    return (
        <div
            style={{
                ...style,
                transition: style?.transition
                    ? `${style.transition}, opacity 0.4s ease`
                    : `opacity 0.4s ease`,
                opacity: hidden ? 0 : 1,
            }}
        >
            {children}
        </div>
    );
};

export default React.memo(FadeIn);
