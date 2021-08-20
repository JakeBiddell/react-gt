import React, { useMemo } from 'react';
import { useCallback } from 'react';
import FadeIn from './FadeIn';
import { ArrowDirections, Overrides } from './types';

export type ModalProps = Overrides & {
    arrowDirection: ArrowDirections;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    renderedContent: any;
    scrollToElement: () => void;
};

const Modal = ({
    arrowDirection,
    stepIndex,
    changeStep,
    allSteps,
    close,
    renderedContent: content,
    scrollToElement,
    arrow: Arrow,
    closeButton: CloseButton,
    currentStepLabel: CurrentStepLabel,
    dialogWrapper: DialogWrapper,
    nextStepButton: NextStepButton,
    previousStepButton: PreviousStepButton,
    stepButtonWrapper: StepButtonWrapper,
    stepButton: StepButton,
}: ModalProps) => {
    const arrow = useMemo(() => <Arrow direction={arrowDirection} />, [Arrow, arrowDirection]);
    const goBack = useCallback(() => {
        if (stepIndex > 0) {
            changeStep(stepIndex - 1);
        }
    }, [changeStep, stepIndex]);
    const goNext = useCallback(() => {
        if (stepIndex < allSteps.length - 1) {
            changeStep(stepIndex + 1);
        }
    }, [allSteps.length, changeStep, stepIndex]);
    const currentStepLabel = useMemo(
        () => <CurrentStepLabel currentStep={stepIndex} totalSteps={allSteps.length} />,
        [CurrentStepLabel, stepIndex, allSteps.length],
    );
    const nextStepButton = useMemo(
        () => (
            <NextStepButton
                currentStep={stepIndex}
                goNext={goNext}
                skipTo={changeStep}
                totalSteps={allSteps.length}
            />
        ),
        [NextStepButton, stepIndex, goNext, changeStep, allSteps.length],
    );
    const previousStepButton = useMemo(
        () => (
            <PreviousStepButton
                currentStep={stepIndex}
                goBack={goBack}
                skipTo={changeStep}
                totalSteps={allSteps.length}
            />
        ),
        [PreviousStepButton, stepIndex, goBack, changeStep, allSteps.length],
    );
    const stepButtonWrapper = useMemo(
        () => (
            <StepButtonWrapper
                stepButtons={allSteps.map((x, index) => (
                    <StepButton
                        key={x}
                        currentStep={stepIndex}
                        step={index}
                        goToStep={() => changeStep(index)}
                    />
                ))}
                currentStep={stepIndex}
                totalSteps={allSteps.length}
                goNext={goNext}
                goBack={goBack}
                skipTo={changeStep}
            />
        ),
        [StepButtonWrapper, allSteps, stepIndex, goNext, goBack, changeStep, StepButton],
    );
    const closeButton = useMemo(() => <CloseButton close={close} />, [close, CloseButton]);
    return (
        <FadeIn>
            <div className="__react-gt__modal-position">
                <div id="__react-gt__modal-container" onClick={arrow ? scrollToElement : undefined}>
                    <DialogWrapper
                        {...{
                            allSteps,
                            arrow,
                            changeStep,
                            closeButton,
                            content,
                            currentStepLabel,
                            nextStepButton,
                            previousStepButton,
                            stepButtonWrapper,
                            stepIndex,
                        }}
                    />
                </div>
            </div>
        </FadeIn>
    );
};

export default React.memo(Modal);
