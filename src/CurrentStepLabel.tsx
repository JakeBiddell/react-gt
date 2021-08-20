import React from 'react';

export type CurrentStepLabelProps = { currentStep: number; totalSteps: number };

const CurrentStepLabel = ({ currentStep }: CurrentStepLabelProps) => (
    <div className="__react-gt__page-number">{currentStep + 1}</div>
);

export default React.memo(CurrentStepLabel);
