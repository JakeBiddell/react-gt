import React from 'react';
import ChevronButton from './ChevronButton';

type Props = {
    currentStep: number;
    totalSteps: number;
    goBack: () => void;
    skipTo: (step: number) => void;
};

const PreviousStepButton = ({ currentStep, goBack }: Props) => (
    <ChevronButton direction={-1} disabled={currentStep === 0} onClick={goBack} />
);

export default PreviousStepButton;
