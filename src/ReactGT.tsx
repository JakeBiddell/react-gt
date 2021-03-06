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

type ReactGTProps = Partial<Overrides> & {
    open: boolean;
    onClose: () => void;
    openAt?: number;
    steps: ReactGTStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
};

const ReactGT = ({
    open,
    onClose,
    steps,
    openAt = 0,
    scrollIntoViewOptions = { behavior: 'smooth', block: 'center' },
    closeButton = CloseButton,
    currentStepLabel = CurrentStepLabel,
    nextStepButton = NextStepButton,
    previousStepButton = PreviousStepButton,
    stepButton = StepButton,
    stepButtonWrapper = StepButtonWrapper,
    arrow = Arrow,
    dialogWrapper = DialogWrapper,
}: ReactGTProps) => {
    const [currentIndex, setCurrentIndex] = useState(openAt);
    const allSteps = useMemo(() => steps.map((_, i) => i), [steps]);
    const close = useCallback(() => {
        onClose();
        setCurrentIndex(openAt);
    }, [onClose, openAt]);
    const changeStep = useCallback(
        (step: number) => {
            if (step >= 0 && step < allSteps.length) {
                setCurrentIndex(step);
            }
        },
        [allSteps.length],
    );
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
                content={steps[currentIndex].content}
                selector={steps[currentIndex].selector}
                stepInteraction={steps[currentIndex].stepInteraction}
                stepIndex={currentIndex}
                changeStep={changeStep}
                allSteps={allSteps}
                close={close}
                scrollIntoViewOptions={scrollIntoViewOptions}
                closeButton={closeButton}
                currentStepLabel={currentStepLabel}
                nextStepButton={nextStepButton}
                previousStepButton={previousStepButton}
                stepButton={stepButton}
                stepButtonWrapper={stepButtonWrapper}
                arrow={arrow}
                dialogWrapper={dialogWrapper}
            />
        </div>
    );
};

export default React.memo(ReactGT);
