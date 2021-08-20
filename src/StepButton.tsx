import React from 'react';
import { StepButtonProps } from './types';

const StepButton = ({ currentStep, step, goToStep }: StepButtonProps) => (
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
