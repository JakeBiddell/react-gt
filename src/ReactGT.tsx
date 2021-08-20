import React, { useMemo, useCallback, useState } from 'react';
import Arrow from './Arrow';
import CloseButton from './CloseButton';
import CurrentStepLabel from './CurrentStepLabel';
import DialogWrapper from './DialogWrapper';
import NextStepButton from './NextStepButton';
import PreviousStepButton from './PreviousStepButton';
import Step from './Step';
import StepButton from './StepButton';
import StepButtonWrapper from './StepButtonWrapper';
import styles from './styles';
import { Overrides, ReactGTStep } from './types';

type ReactGTProps = {
    open: boolean;
    onClose: () => void;
    openAt?: number;
    steps: ReactGTStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
    overrides?: Partial<Overrides>;
};

const ReactGT = ({
    open,
    onClose,
    steps,
    openAt = 0,
    scrollIntoViewOptions = { behavior: 'smooth', block: 'center' },
    overrides,
}: ReactGTProps) => {
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);
    const close = useCallback(() => {
        onClose();
        setCurrentIndex(openAt);
    }, [onClose, openAt]);
    if (!open) return null;

    return (
        <div className="__react-gt__">
            <style>{styles()}</style>
            {
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div className="__react-gt__overlay" onClick={close} />
            }
            <Step
                {...steps[currentIndex]}
                stepIndex={currentIndex}
                changeStep={index => setCurrentIndex(index)}
                allSteps={allSteps}
                close={close}
                scrollIntoViewOptions={scrollIntoViewOptions}
                overrides={{
                    closeButton: overrides?.closeButton ?? CloseButton,
                    currentStepLabel: overrides?.currentStepLabel ?? CurrentStepLabel,
                    nextStepButton: overrides?.nextStepButton ?? NextStepButton,
                    previousStepButton: overrides?.previousStepButton ?? PreviousStepButton,
                    stepButton: overrides?.stepButton ?? StepButton,
                    stepButtonWrapper: overrides?.stepButtonWrapper ?? StepButtonWrapper,
                    arrow: overrides?.arrow ?? Arrow,
                    dialogWrapper: overrides?.dialogWrapper ?? DialogWrapper,
                }}
            />
        </div>
    );
};

export default React.memo(ReactGT);
