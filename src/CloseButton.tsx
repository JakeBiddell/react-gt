import React from 'react';
import { Close } from './Icons';

const CloseButton = ({ close }: { close: () => void }) => (
    <button
        type="button"
        onClick={event => {
            event.stopPropagation();
            close();
        }}
        className="__react-gt__close-button"
    >
        <Close />
    </button>
);

export default React.memo(CloseButton);
