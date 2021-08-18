import React from 'react';
import { useState } from 'react';

const Hover = ({ style, children }: { style: React.CSSProperties; children?: React.ReactNode }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            style={isHovering ? style : undefined}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {children}
        </div>
    );
};
export default React.memo(Hover);
