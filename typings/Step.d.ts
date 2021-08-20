import React from 'react';
import { Overrides, ReactGTStep } from './types';
declare type Props = Partial<ReactGTStep> & {
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: () => void;
    scrollIntoViewOptions: ScrollIntoViewOptions;
    overrides: Overrides;
};
declare const _default: React.MemoExoticComponent<({ selector, content: Content, stepIndex, ...props }: Props) => JSX.Element>;
export default _default;
//# sourceMappingURL=Step.d.ts.map