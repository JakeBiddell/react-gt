import React from 'react';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './Icons';

const Arrow = ({ direction }: { direction: 'up' | 'left' | 'down' | 'right' | null }) => (
    <div className="__react-gt__arrow">
        {(() => {
            switch (direction) {
                case 'up':
                    return <UpArrow />;
                case 'down':
                    return <DownArrow />;
                case 'right':
                    return <RightArrow />;
                case 'left':
                    return <LeftArrow />;
                default:
                    return null;
            }
        })()}
    </div>
);

export default Arrow;
