import React from 'react';
import { Overrides } from './types';
declare type Props = {
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    overrides: Pick<Overrides, 'nextStepButton' | 'previousStepButton' | 'stepButton' | 'stepButtonWrapper'>;
};
declare const _default: React.MemoExoticComponent<({ stepIndex, changeStep, allSteps, overrides: { nextStepButton: NextStepButton, previousStepButton: PreviousStepButton, stepButton: StepButton, stepButtonWrapper: StepButtonWrapper, }, }: Props) => JSX.Element>;
export default _default;
//# sourceMappingURL=pageSelector.d.ts.map