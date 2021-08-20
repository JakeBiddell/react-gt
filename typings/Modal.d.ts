import React from 'react';
import { Overrides } from './types';
export declare type ModalProps = {
    boundaries: DOMRect;
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    renderedContent: any;
    scrollToElement: () => void;
    overrides: Overrides;
};
declare const _default: React.MemoExoticComponent<({ boundaries, stepIndex, changeStep, allSteps, close, renderedContent: content, scrollToElement, overrides: { arrow: Arrow, closeButton: CloseButton, currentStepLabel: CurrentStepLabel, dialogWrapper: DialogWrapper, nextStepButton: NextStepButton, previousStepButton: PreviousStepButton, stepButtonWrapper: StepButtonWrapper, stepButton: StepButton, ...overrides }, }: ModalProps) => JSX.Element>;
export default _default;
//# sourceMappingURL=Modal.d.ts.map