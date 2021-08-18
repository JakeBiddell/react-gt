import React, { useMemo, useState, useEffect } from 'react';
import { ReactGTStep } from './types';
import Highlight from './Highlight';
import Modal from './Modal';

const $ = (query: string) => document.querySelector(query);

const scrollOptions = { behavior: 'smooth', block: 'center' } as ScrollIntoViewOptions;

type Props = Partial<ReactGTStep> & {
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: (event: React.MouseEvent) => void;
};

const Step = React.memo(
    ({
        element,
        stepIndex,
        changeStep,
        allSteps,
        close,
        renderedContent,
    }: Props & { element: Element; renderedContent: any }) => {
        const [boundaries, setBoundaries] = useState(() => element.getBoundingClientRect());
        useEffect(() => {
            element.scrollIntoView(scrollOptions);
            const adjustBoundaries = () => setBoundaries(element.getBoundingClientRect());
            adjustBoundaries();
            window.addEventListener('resize', adjustBoundaries);
            window.addEventListener('scroll', adjustBoundaries);

            const interval = setInterval(() => window.dispatchEvent(new Event('resize')), 250);

            const timeout = setTimeout(() => clearInterval(interval), 3000);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
                window.removeEventListener('resize', adjustBoundaries);
                window.removeEventListener('scroll', adjustBoundaries);
            };
        }, [element]);
        return (
            <>
                <Highlight boundaries={boundaries} />
                <Modal
                    boundaries={boundaries}
                    renderedContent={renderedContent}
                    stepIndex={stepIndex}
                    changeStep={changeStep}
                    allSteps={allSteps}
                    close={close}
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
