import React, { useMemo, useCallback, useState } from 'react';
import Step from './Step';
import { ReactGTStep } from './types';

const ReactGT = ({
    open,
    onClose,
    steps,
    openAt = 0,
}: {
    open: boolean;
    onClose: () => void;
    openAt?: number;
    steps: ReactGTStep[];
}) => {
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);
    const close = useCallback(
        (event: React.MouseEvent) => {
            event.stopPropagation();
            onClose();
            setCurrentIndex(openAt);
        },
        [onClose, openAt],
    );
    if (!open) return null;

    return (
        <>
            {
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        zIndex: 999997,
                    }}
                    onClick={close}
                />
            }
            <Step
                {...steps[currentIndex]}
                stepIndex={currentIndex}
                changeStep={index => setCurrentIndex(index)}
                allSteps={allSteps}
                close={close}
            />
        </>
    );
};

export default React.memo(ReactGT);
