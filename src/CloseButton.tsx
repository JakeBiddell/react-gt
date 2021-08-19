import React from 'react';
import { Close } from './Icons';

const CloseButton = ({ close }: { close: (event: React.MouseEvent) => void }) => (
    <button type="button" onClick={close} className="__react-gt__close-button">
        <Close />
    </button>
);

export default React.memo(CloseButton);
