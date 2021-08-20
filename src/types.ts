import Arrow from './Arrow';

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

export type CloseButtonProps = { close: () => void };
export type CurrentStepLabelProps = { currentStep: number; totalSteps: number };
export type NextStepButtonProps = {
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    skipTo: (step: number) => void;
};
export type PreviousStepButtonProps = {
    currentStep: number;
    totalSteps: number;
    goBack: () => void;
    skipTo: (step: number) => void;
};
export type StepButtonProps = { currentStep: number; step: number; goToStep: () => void };
type StepButtonWrapperProps = {
    stepButtons: JSX.Element[];
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    goBack: () => void;
    skipTo: (step: number) => void;
};
export type ArrowProps = { direction: ArrowDirections };
type DialogWrapperProps = {
    [key in keyof Omit<Overrides, 'dialogWrapper' | 'stepButton'>]: JSX.Element;
} & {
    content: JSX.Element;
};

export type Overrides = {
    closeButton: (props: CloseButtonProps) => JSX.Element;
    currentStepLabel: (props: CurrentStepLabelProps) => JSX.Element;
    nextStepButton: (props: NextStepButtonProps) => JSX.Element;
    previousStepButton: (props: PreviousStepButtonProps) => JSX.Element;
    stepButton: (props: StepButtonProps) => JSX.Element;
    stepButtonWrapper: (props: StepButtonWrapperProps) => JSX.Element;
    arrow: (props: ArrowProps) => JSX.Element;
    dialogWrapper: (props: DialogWrapperProps) => JSX.Element;
};
