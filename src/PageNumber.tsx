import React from 'react';

const PageNumber = ({ selectedIndex }: { selectedIndex: number }) => (
    <div
        style={{
            backgroundColor: '#00c19f',
            color: 'white',
            boxShadow: 'rgb(0 0 0 / 30%) 0px 0.5em 3em',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: '-10px',
            top: '-10px',
        }}
    >
        {selectedIndex + 1}
    </div>
);

export default React.memo(PageNumber);
