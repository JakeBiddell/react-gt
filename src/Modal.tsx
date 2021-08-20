import React, { useMemo } from 'react';
import FadeIn from './FadeIn';
import { ArrowDirections, Overrides } from './types';

export type ModalProps = {
    arrowDirection: ArrowDirections;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    renderedContent: any;
    scrollToElement: () => void;
    overrides: Overrides;
};

const Modal = ({
    arrowDirection,
    stepIndex,
    changeStep,
    allSteps,
    close,
    renderedContent: content,
    scrollToElement,
    overrides: {
        arrow: Arrow,
        closeButton: CloseButton,
        currentStepLabel: CurrentStepLabel,
        dialogWrapper: DialogWrapper,
        nextStepButton: NextStepButton,
        previousStepButton: PreviousStepButton,
        stepButtonWrapper: StepButtonWrapper,
        stepButton: StepButton,
    },
}: ModalProps) => {
    const arrow = useMemo(() => <Arrow direction={arrowDirection} />, [arrowDirection]);
    const currentStepLabel = useMemo(
        () => <CurrentStepLabel currentStep={stepIndex} totalSteps={allSteps.length} />,
        [stepIndex, allSteps.length],
    );
    const nextStepButton = useMemo(
        () => (
            <NextStepButton
                currentStep={stepIndex}
                goNext={() => changeStep(stepIndex + 1)}
                skipTo={changeStep}
                totalSteps={allSteps.length}
            />
        ),
        [stepIndex, changeStep, allSteps.length],
    );
    const previousStepButton = useMemo(
        () => (
            <PreviousStepButton
                currentStep={stepIndex}
                goBack={() => changeStep(stepIndex - 1)}
                skipTo={changeStep}
                totalSteps={allSteps.length}
            />
        ),
        [stepIndex, changeStep, allSteps.length],
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
                goNext={() => changeStep(stepIndex + 1)}
                goBack={() => changeStep(stepIndex - 1)}
                skipTo={changeStep}
            />
        ),
        [allSteps, stepIndex, changeStep],
    );
    const closeButton = useMemo(() => <CloseButton close={close} />, [close]);
    return (
        <FadeIn>
            <div className="__react-gt__modal-position">
                <div
                    id="__react-gt__modal-container"
                    onClick={!!arrow ? scrollToElement : undefined}
                >
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
