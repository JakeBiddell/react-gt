import { Overrides } from './types';
declare type Props = {
    [key in keyof Omit<Overrides, 'dialogWrapper' | 'stepButton'>]: JSX.Element;
} & {
    content: JSX.Element;
};
declare const DialogWrapper: ({ arrow, currentStepLabel, closeButton, content, previousStepButton, stepButtonWrapper, nextStepButton, }: Props) => JSX.Element;
export default DialogWrapper;
//# sourceMappingURL=DialogWrapper.d.ts.map