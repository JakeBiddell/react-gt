import React from 'react';

const PageNumber = ({ selectedIndex }: { selectedIndex: number }) => (
    <div className="__react-gt__page-number">{selectedIndex + 1}</div>
);

export default React.memo(PageNumber);
