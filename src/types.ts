import Arrow from './Arrow';
import CloseButton from './CloseButton';
import CurrentStepLabel from './CurrentStepLabel';
import DialogWrapper from './DialogWrapper';
import NextStepButton from './NextStepButton';
import PreviousStepButton from './PreviousStepButton';
import StepButton from './StepButton';
import StepButtonWrapper from './StepButtonWrapper';

export type CRMTourContextValues = {
    open: (atStep?: number) => void;
    close: () => void;
    isOpen: boolean;
    steps: ReactGTStep[];
};

export type ReactGTStep = {
    content: ({ step }: { step: number }) => JSX.Element;
    selector: string;
    stepInteraction?: boolean;
};

export type Position = {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
};

export type ArrowDirections = 'up' | 'left' | 'down' | 'right' | null;

export type Overrides = {
    closeButton: typeof CloseButton;
    currentStepLabel: typeof CurrentStepLabel;
    nextStepButton: typeof NextStepButton;
    previousStepButton: typeof PreviousStepButton;
    stepButton: typeof StepButton;
    stepButtonWrapper: typeof StepButtonWrapper;
    arrow: typeof Arrow;
    dialogWrapper: typeof DialogWrapper;
};
