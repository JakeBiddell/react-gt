import React from 'react';
import ChevronButton from './ChevronButton';

type Props = {
    currentStep: number;
    totalSteps: number;
    goBack: () => void;
    skipTo: (step: number) => void;
};

const PreviousStepButton = ({ currentStep, goBack, totalSteps }: Props) => (
    <ChevronButton direction={-1} disabled={currentStep === totalSteps - 1} onClick={goBack} />
);

export default PreviousStepButton;
