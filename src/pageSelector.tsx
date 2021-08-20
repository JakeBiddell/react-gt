import React from 'react';
import { Overrides } from './types';

type Props = {
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    overrides: Pick<
        Overrides,
        'nextStepButton' | 'previousStepButton' | 'stepButton' | 'stepButtonWrapper'
    >;
};
const PageSelector = ({
    stepIndex,
    changeStep,
    allSteps,
    overrides: {
        nextStepButton: NextStepButton,
        previousStepButton: PreviousStepButton,
        stepButton: StepButton,
        stepButtonWrapper: StepButtonWrapper,
    },
}: Props) => (
    <div className="__react-gt__page-selector">
        <PreviousStepButton
            currentStep={stepIndex}
            goBack={() => changeStep(stepIndex - 1)}
            skipTo={changeStep}
            totalSteps={allSteps.length}
        />
        <StepButtonWrapper
            stepButtons={allSteps.map((x, index) => (
                <StepButton
                    key={x}
                    currentStep={stepIndex}
                    step={index}
                    goToStep={() => changeStep(index)}
                />
            ))}
            currentStep={stepIndex}
            totalSteps={allSteps.length}
            goNext={() => changeStep(stepIndex + 1)}
            goBack={() => changeStep(stepIndex - 1)}
            skipTo={changeStep}
        />
        <div className="__react-gt__dot-wrapper">
            {allSteps.map((x, index) => (
                <StepButton
                    key={x}
                    currentStep={stepIndex}
                    step={index}
                    goToStep={() => changeStep(index)}
                />
            ))}
        </div>
        <NextStepButton
            currentStep={stepIndex}
            goNext={() => changeStep(stepIndex + 1)}
            skipTo={changeStep}
            totalSteps={allSteps.length}
        />
    </div>
);

export default React.memo(PageSelector);
