import React from 'react';

const CloseButton = ({ close }: { close: (event: React.MouseEvent) => void }) => (
    <button type="button" onClick={close} className="__react-gt__close-button" />
);

export default React.memo(CloseButton);
