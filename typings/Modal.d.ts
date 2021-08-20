import React from 'react';
import { ArrowDirections, Overrides } from './types';
export declare type ModalProps = Overrides & {
    arrowDirection: ArrowDirections;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    renderedContent: any;
    scrollToElement: () => void;
};
declare const _default: React.MemoExoticComponent<({ arrowDirection, stepIndex, changeStep, allSteps, close, renderedContent: content, scrollToElement, arrow: Arrow, closeButton: CloseButton, currentStepLabel: CurrentStepLabel, dialogWrapper: DialogWrapper, nextStepButton: NextStepButton, previousStepButton: PreviousStepButton, stepButtonWrapper: StepButtonWrapper, stepButton: StepButton, }: ModalProps) => JSX.Element>;
export default _default;
//# sourceMappingURL=Modal.d.ts.map