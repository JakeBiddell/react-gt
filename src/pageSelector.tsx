import React, { MouseEventHandler, useState } from 'react';
import Hover from './Hover';
import { LeftArrow, RightArrow } from './Icons';

const DotButton = ({ selected, onClick }: { selected: boolean; onClick: MouseEventHandler }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <style>{`
__react-gt__dot {
    cursor: pointer;
    display: contents;
    width: 10px;
    height: 10px;
    background-color: inherit;
    border: 1px solid #757575;
    border-radius: 50%;
    margin-right: 7px;
    overflow: hidden;
}
__react-gt__dot:hover {
    background-color: #757575;
}
__react-gt__dot-selected {
    cursor: default;
    background-color: #00c19f;
    border: 1px solid #00c19f;
}
__react-gt__dot-selected:hover {
    background-color: #00c19f;
}
`}</style>
            <button type="button" className="__react-gt__dot" onClick={onClick} />
        </>
    );
};

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
