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
export declare type ArrowDirections = 'up' | 'left' | 'down' | 'right' | null;
export declare type CloseButtonProps = {
    close: () => void;
};
export declare type CurrentStepLabelProps = {
    currentStep: number;
    totalSteps: number;
};
export declare type NextStepButtonProps = {
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    skipTo: (step: number) => void;
};
export declare type PreviousStepButtonProps = {
    currentStep: number;
    totalSteps: number;
    goBack: () => void;
    skipTo: (step: number) => void;
};
export declare type StepButtonProps = {
    currentStep: number;
    step: number;
    goToStep: () => void;
};
export declare type StepButtonWrapperProps = {
    stepButtons: JSX.Element[];
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    goBack: () => void;
    skipTo: (step: number) => void;
};
export declare type ArrowProps = {
    direction: ArrowDirections;
};
export declare type DialogWrapperProps = {
    [key in keyof Omit<Overrides, 'dialogWrapper' | 'stepButton'>]: JSX.Element;
} & {
    content: JSX.Element;
    stepButtonComponent: (props: StepButtonProps) => JSX.Element;
};
export declare type Overrides = {
    closeButton: (props: CloseButtonProps) => JSX.Element;
    currentStepLabel: (props: CurrentStepLabelProps) => JSX.Element;
    nextStepButton: (props: NextStepButtonProps) => JSX.Element;
    previousStepButton: (props: PreviousStepButtonProps) => JSX.Element;
    stepButton: (props: StepButtonProps) => JSX.Element;
    stepButtonWrapper: (props: StepButtonWrapperProps) => JSX.Element;
    arrow: (props: ArrowProps) => JSX.Element;
    dialogWrapper: (props: DialogWrapperProps) => JSX.Element;
};
//# sourceMappingURL=types.d.ts.map