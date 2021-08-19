import React, { useMemo, useRef } from 'react';
import CloseButton from './CloseButton';
import FadeIn from './FadeIn';
import calculateModalPosition from './LIB/calculateModalPosition';
import PageNumber from './PageNumber';
import PageSelector from './pageSelector';

const speed = '0.4';

const Modal = ({
    boundaries,
    stepIndex,
    changeStep,
    allSteps,
    close,
    renderedContent,
}: {
    boundaries: DOMRect;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: (event: React.MouseEvent) => void;
    renderedContent: any;
}) => {
    const ref = useRef(undefined as HTMLDivElement);
    const content = useMemo(
        () => (
            <div ref={ref}>
                {renderedContent}
                <PageSelector stepIndex={stepIndex} changeStep={changeStep} allSteps={allSteps} />
            </div>
        ),
        [allSteps, changeStep, renderedContent, stepIndex],
    );
    const position = useMemo(
        () => calculateModalPosition(boundaries, (ref?.current?.clientHeight ?? 0) + 48),
        [boundaries],
    );
    return (
        <FadeIn
            className="__react-gt__modal"
            style={{
                transition: `transform ${speed}s ease, height ${speed}s ease, width ${speed}s ease`,
                transform: `translate(${
                    position.right
                        ? `calc(${document.body.clientWidth - position.right}px - 100%)`
                        : `${position.left}px`
                }, ${position.bottom ? `calc(${position.bottom}px - 100%)` : `${position.top}px`})`,
                width: `${position.width}px`,
                height: `${position.height}px`,
            }}
        >
            <div
                className="__react-gt__modal-content"
                style={{
                    padding: `24px ${position.width / 11}px`,
                }}
            >
                <PageNumber selectedIndex={stepIndex} />
                <CloseButton close={close} />
                {content}
            </div>
        </FadeIn>
    );
};

export default React.memo(Modal);
