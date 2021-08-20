import React from 'react';

type Props = { currentStep: number; step: number; goToStep: () => void };

const StepButton = ({ currentStep, step, goToStep }: Props) => (
    <button
        type="button"
        className={
            currentStep === step ? `__react-gt__dot __react-gt__dot-selected` : '__react-gt__dot'
        }
        onClick={goToStep}
    >
        <div />
    </button>
);

export default StepButton;
