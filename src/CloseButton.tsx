import React from 'react';
import Hover from './Hover';
import { Close } from './Icons';

const CloseButton = ({ close }: { close: (event: React.MouseEvent) => void }) => (
    <button
        type="button"
        onClick={close}
        style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#757575',
            cursor: 'pointer',
            position: 'absolute',
            top: '12px',
            right: '15px',
        }}
    >
        <Hover style={{ color: '#212121' }}>
            <Close />
        </Hover>
    </button>
);

export default React.memo(CloseButton);
