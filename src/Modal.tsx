import React, { useMemo, useRef } from 'react';
import FadeIn from './FadeIn';
import calculateModalPosition from './LIB/calculateModalPosition';
import { styleObjectToStyleString } from './styles';
import { Overrides } from './types';
const getArrowDirection = ({
    top,
    left,
    height,
    width,
}: DOMRect): 'up' | 'left' | 'down' | 'right' | null =>
    top < -height
        ? 'up'
        : top > window.innerHeight - 10
        ? 'down'
        : left > window.innerWidth - 10
        ? 'right'
        : left < -width
        ? 'left'
        : null;

export type ModalProps = {
    boundaries: DOMRect;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    renderedContent: any;
    scrollToElement: () => void;
    overrides: Overrides;
};

const Modal = ({
    boundaries,
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
        ...overrides
    },
}: ModalProps) => {
    const ref = useRef(undefined as HTMLDivElement);
    const position = useMemo(
        () => calculateModalPosition(boundaries, ref?.current?.clientHeight ?? 0),
        [boundaries],
    );
    const arrowDirection = useMemo(() => getArrowDirection(boundaries), [boundaries]);
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
    const modal = useMemo(
        () => (
            <div className="__react-gt__modal-z-index">
                <FadeIn>
                    <div className="__react-gt__modal-position">
                        <div ref={ref} onClick={!!arrow ? scrollToElement : undefined}>
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
            </div>
        ),
        [
            arrow,
            scrollToElement,
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
        ],
    );
    return (
        <>
            <style>
                {styleObjectToStyleString({
                    '.__react-gt__': {
                        modal: {
                            '-position': {
                                transform: `translate(${
                                    position.right
                                        ? `calc(${
                                              document.body.clientWidth - position.right
                                          }px - 100%)`
                                        : `${position.left}px`
                                }, ${
                                    position.bottom
                                        ? `calc(${position.bottom}px - 100%)`
                                        : `${position.top}px`
                                })`,
                                width: `${position.width}px`,
                                height: `${position.height}px`,
                            },
                            '-content': {
                                padding: `24px ${position.width / 11}px`,
                            },
                        },
                    },
                })}
            </style>
            {modal}
        </>
    );
};

export default React.memo(Modal);
