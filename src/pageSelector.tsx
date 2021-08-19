import React, { MouseEventHandler, useState } from 'react';
import { LeftArrow, RightArrow } from './Icons';

const DotButton = ({ selected, onClick }: { selected: boolean; onClick: MouseEventHandler }) => (
    <button
        type="button"
        className={selected ? `__react-gt__dot __react-gt__dot-selected` : '__react-gt__dot'}
        onClick={onClick}
    >
        <div />
    </button>
);

type ButtonType = { direction: -1 | 1; disabled: boolean; onClick: MouseEventHandler };
const ChevronButton = ({ direction, disabled, onClick }: ButtonType) => (
    <button
        type="button"
        className="__react-gt__chevron-button"
        disabled={disabled}
        onClick={onClick}
    >
        {direction === -1 ? <LeftArrow /> : <RightArrow />}
    </button>
);

type Props = { stepIndex: number; changeStep: (index: number) => void; allSteps: number[] };
const PageSelector = ({ stepIndex, changeStep, allSteps }: Props) => (
    <div className="__react-gt__page-selector">
        <ChevronButton
            direction={-1}
            disabled={allSteps[0] === stepIndex}
            onClick={() => changeStep(stepIndex - 1)}
        />
        <div className="__react-gt__dot-wrapper">
            {allSteps.map((x, index) => (
                <DotButton
                    key={x}
                    onClick={() => changeStep(index)}
                    selected={index === stepIndex}
                />
            ))}
        </div>
        <ChevronButton
            direction={1}
            disabled={allSteps[allSteps.length - 1] === stepIndex}
            onClick={() => changeStep(stepIndex + 1)}
        />
    </div>
);

export default React.memo(PageSelector);
