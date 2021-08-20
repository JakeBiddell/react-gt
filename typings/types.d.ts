import CloseButton from './CloseButton';
import CurrentStepLabel from './CurrentStepLabel';
import NextStepButton from './NextStepButton';
import PreviousStepButton from './PreviousStepButton';
import StepButton from './StepButton';
import StepButtonWrapper from './StepButtonWrapper';
export declare type CRMTourContextValues = {
    open: (atStep?: number) => void;
    close: () => void;
    isOpen: boolean;
    steps: ReactGTStep[];
};
export declare type ReactGTStep = {
    content: ({ step }: {
        step: number;
    }) => JSX.Element;
    selector: string;
    stepInteraction?: boolean;
};
export declare type Position = {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
};
export declare type Overrides = {
    closeButton: typeof CloseButton;
    currentStepLabel: typeof CurrentStepLabel;
    nextStepButton: typeof NextStepButton;
    previousStepButton: typeof PreviousStepButton;
    stepButton: typeof StepButton;
    stepButtonWrapper: typeof StepButtonWrapper;
};
//# sourceMappingURL=types.d.ts.map