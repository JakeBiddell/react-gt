declare type Props = {
    stepButtons: JSX.Element[];
    currentStep: number;
    totalSteps: number;
    goNext: () => void;
    goBack: () => void;
    skipTo: (step: number) => void;
};
declare const StepButtonWrapper: ({ stepButtons }: Props) => JSX.Element;
export default StepButtonWrapper;
//# sourceMappingURL=StepButtonWrapper.d.ts.map