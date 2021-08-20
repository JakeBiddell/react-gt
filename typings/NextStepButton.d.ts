declare type Props = {
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    skipTo: (step: number) => void;
};
declare const NextStepButton: ({ currentStep, goNext }: Props) => JSX.Element;
export default NextStepButton;
//# sourceMappingURL=NextStepButton.d.ts.map