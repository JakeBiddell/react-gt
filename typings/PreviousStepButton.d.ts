declare type Props = {
    currentStep: number;
    totalSteps: number;
    goBack: () => void;
    skipTo: (step: number) => void;
};
declare const PreviousStepButton: ({ currentStep, goBack, totalSteps }: Props) => JSX.Element;
export default PreviousStepButton;
//# sourceMappingURL=PreviousStepButton.d.ts.map