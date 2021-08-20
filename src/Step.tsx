import React, { useMemo, useState, useEffect } from 'react';
import { Overrides, ReactGTStep } from './types';
import Highlight from './Highlight';
import Modal from './Modal';
import { useCallback } from 'react';
import { styleObjectToStyleString } from './styles';
import calculateModalPosition from './LIB/calculateModalPosition';
import getArrowDirection from './LIB/getArrowDirection';

const $ = (query: string) => document.querySelector(query);

type Props = Partial<ReactGTStep> & {
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    scrollIntoViewOptions: ScrollIntoViewOptions;
    overrides: Overrides;
};

const Styler = React.memo(({ boundaries }: { boundaries: DOMRect }) => {
    const modalContainer = $(`#__react-gt__modal-container`);
    const position = calculateModalPosition(boundaries, modalContainer?.clientHeight ?? 0);
    return (
        <style>
            {styleObjectToStyleString({
                '.__react-gt__': {
                    modal: {
                        '-position': {
                            transform: `translate(${
                                position.right
                                    ? `calc(${document.body.clientWidth - position.right}px - 100%)`
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
                    highlight: {
                        transform: `translate(${boundaries.left - 10}px, ${boundaries.top - 10}px)`,
                        height: `${boundaries.height + 20}px`,
                        width: `${boundaries.width + 20}px`,
                    },
                },
            })}
        </style>
    );
});

const Step = React.memo(
    ({
        element,
        stepIndex,
        changeStep,
        allSteps,
        close,
        renderedContent,
        scrollIntoViewOptions,
        overrides,
    }: Props & { element: Element; renderedContent: any }) => {
        const [boundaries, setBoundaries] = useState(() => element.getBoundingClientRect());
        const adjustBoundaries = useCallback(
            () => setBoundaries(element.getBoundingClientRect()),
            [element],
        );
        const scrollToElement = useCallback(() => {
            element.scrollIntoView(scrollIntoViewOptions);
            adjustBoundaries();
        }, [element]);
        const keyDownEventHandler = useCallback(
            (event: KeyboardEvent) => {
                if (event.code === 'ArrowLeft' && stepIndex !== 0) {
                    changeStep(stepIndex - 1);
                } else if (event.code === 'ArrowRight' && stepIndex !== allSteps.length - 1) {
                    changeStep(stepIndex + 1);
                }
            },
            [stepIndex, changeStep, allSteps],
        );
        useEffect(() => {
            scrollToElement();
            window.addEventListener('resize', adjustBoundaries);
            window.addEventListener('scroll', adjustBoundaries);
            window.addEventListener('keydown', keyDownEventHandler);

            const interval = setInterval(() => window.dispatchEvent(new Event('resize')), 250);

            const timeout = setTimeout(() => clearInterval(interval), 3000);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
                window.removeEventListener('resize', adjustBoundaries);
                window.removeEventListener('scroll', adjustBoundaries);
                window.removeEventListener('keydown', keyDownEventHandler);
            };
        }, [element]);

        const arrowDirection = useMemo(() => getArrowDirection(boundaries), [boundaries]);
        return (
            <>
                <Styler boundaries={boundaries} />
                <Highlight />
                <Modal
                    scrollToElement={scrollToElement}
                    arrowDirection={arrowDirection}
                    renderedContent={renderedContent}
                    stepIndex={stepIndex}
                    changeStep={changeStep}
                    allSteps={allSteps}
                    close={close}
                    overrides={overrides}
                />
            </>
        );
    },
);

const ElementFinder = ({ selector, content: Content, stepIndex, ...props }: Props) => {
    const [failedCount, setFailedCount] = useState(0);
    const renderedContent = <Content step={stepIndex} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const element = useMemo(() => $(selector), [selector, failedCount]);
    if (element == null && failedCount < 25) {
        setTimeout(() => setFailedCount(failedCount + 1), 100);
    }
    if (failedCount > 0) {
        setFailedCount(0);
    }
    if (!process.env.NODE_ENV || (process.env.NODE_ENV === 'development' && failedCount == 25)) {
        // eslint-disable-next-line no-console
        console.warn(
            `ReactGT: Failed to find element using selector '${selector}', falling back to documents body element.`,
        );
    }
    return (
        <Step {...{ ...props, element: element ?? document.body, renderedContent, stepIndex }} />
    );
};

export default React.memo(ElementFinder);
