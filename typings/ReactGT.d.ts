import React from 'react';
import { Overrides, ReactGTStep } from './types';
declare type ReactGTProps = Partial<Overrides> & {
    open: boolean;
    onClose: () => void;
    openAt?: number;
    steps: ReactGTStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
};
declare const _default: React.MemoExoticComponent<({ open, onClose, steps, openAt, scrollIntoViewOptions, closeButton, currentStepLabel, nextStepButton, previousStepButton, stepButton, stepButtonWrapper, arrow, dialogWrapper, }: ReactGTProps) => JSX.Element>;
export default _default;
//# sourceMappingURL=ReactGT.d.ts.map