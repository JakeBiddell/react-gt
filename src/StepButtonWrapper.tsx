import React from 'react';

type Props = {
    stepButtons: JSX.Element[];
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    goBack: () => void;
    skipTo: (step: number) => void;
};

const StepButtonWrapper = ({ stepButtons }: Props) => (
    <div className="__react-gt__dot-wrapper">{stepButtons}</div>
);

export default StepButtonWrapper;
