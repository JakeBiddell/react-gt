import React from 'react';
import ChevronButton from './ChevronButton';

type Props = {
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    skipTo: (step: number) => void;
};

const NextStepButton = ({ currentStep, totalSteps, goNext }: Props) => (
    <ChevronButton direction={1} disabled={currentStep === totalSteps - 1} onClick={goNext} />
);

export default NextStepButton;
