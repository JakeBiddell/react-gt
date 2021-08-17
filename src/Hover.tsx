import React from 'react';

const Hover = ({ style, children }: { style: React.CSSProperties; children?: React.ReactNode }) => (
    <div style={style}>{children}</div>
);

export default Hover;
