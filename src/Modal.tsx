import React, { useMemo, useRef } from 'react';
import FadeIn from './FadeIn';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './Icons';
import calculateModalPosition from './LIB/calculateModalPosition';
import PageSelector from './pageSelector';
import { styleObjectToStyleString } from './styles';
import { Overrides } from './types';
const getArrow = ({ top, left, height, width }: DOMRect) =>
    top < -height ? (
        <UpArrow />
    ) : top > window.innerHeight - 10 ? (
        <DownArrow />
    ) : left > window.innerWidth - 10 ? (
        <RightArrow />
    ) : left < -width ? (
        <LeftArrow />
    ) : null;

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
    renderedContent,
    scrollToElement,
    overrides: { closeButton: CloseButton, currentStepLabel: CurrentStepLabel, ...overrides },
}: ModalProps) => {
    const ref = useRef(undefined as HTMLDivElement);
    const content = useMemo(
        () => (
            <div>
                {renderedContent}
                <PageSelector
                    stepIndex={stepIndex}
                    changeStep={changeStep}
                    allSteps={allSteps}
                    overrides={overrides}
                />
            </div>
        ),
        [allSteps, changeStep, renderedContent, stepIndex],
    );
    const position = useMemo(
        () => calculateModalPosition(boundaries, (ref?.current?.clientHeight ?? 0) + 48),
        [boundaries],
    );
    const arrow = useMemo(() => getArrow(boundaries), [boundaries]);
    const modal = useMemo(
        () => (
            <FadeIn>
                <div className="__react-gt__modal-position">
                    <div className="__react-gt__modal" ref={ref}>
                        <div
                            className="__react-gt__modal-content"
                            onClick={!!arrow ? scrollToElement : undefined}
                        >
                            {!!arrow && <div className="__react-gt__arrow">{arrow}</div>}
                            <CurrentStepLabel
                                currentStep={stepIndex}
                                totalSteps={allSteps.length}
                            />
                            <CloseButton close={close} />
                            {content}
                        </div>
                    </div>
                </div>
            </FadeIn>
        ),
        [arrow, content, scrollToElement, close],
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
