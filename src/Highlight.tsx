import React from 'react';
import FadeIn from './FadeIn';

const Highlight = () => (
    <FadeIn>
        <div className="__react-gt__highlight" />
    </FadeIn>
);

export default React.memo(Highlight);
