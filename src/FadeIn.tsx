import React, { useState, useEffect } from 'react';

const FadeIn = ({
    children,
    style,
    className,
}: {
    children?: JSX.Element;
    style?: React.CSSProperties;
    className?: string;
}) => {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 0);
    }, []);
    return (
        <div
            className={`${className} __react-gt__fade-in ${
                hidden ? '' : '__react-gt__fade-in-init'
            }`}
        >
            {children}
        </div>
    );
};

export default React.memo(FadeIn);
