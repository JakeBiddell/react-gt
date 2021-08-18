import React, { MouseEventHandler, useState } from 'react';
import Hover from './Hover';
import { LeftArrow, RightArrow } from './Icons';
import { dotclass, selectedDotClass } from './styles';

const DotButton = ({ selected, onClick }: { selected: boolean; onClick: MouseEventHandler }) => (
    <button
        type="button"
        className={selected ? `${dotclass} ${selectedDotClass}` : dotclass}
        onClick={onClick}
    >
        <div />
    </button>
);

type ButtonType = { direction: -1 | 1; disabled: boolean; onClick: MouseEventHandler };
const ChevronButton = ({ direction, disabled, onClick }: ButtonType) => (
    <button
        type="button"
        style={{
            backgroundColor: 'inherit',
            border: 'none',
            color: disabled ? '#e0e0e0' : '#757575',
            cursor: disabled ? 'default' : 'pointer',
        }}
        disabled={disabled}
        onClick={onClick}
    >
        <Hover style={disabled ? undefined : { color: '#212121' }}>
            {direction === -1 ? <LeftArrow /> : <RightArrow />}
        </Hover>
    </button>
);

type Props = { stepIndex: number; changeStep: (index: number) => void; allSteps: number[] };
const PageSelector = ({ stepIndex, changeStep, allSteps }: Props) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
        <ChevronButton
            direction={-1}
            disabled={allSteps[0] === stepIndex}
            onClick={() => changeStep(stepIndex - 1)}
        />
        <div
            style={{
                display: 'flex',
                maxWidth: '200px',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}
        >
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
