import React from 'react';
import { ReactGTStep } from './types';
declare type Props = Partial<ReactGTStep> & {
    stepIndex: number;
    changeStep: (index: number) => void;
    allSteps: number[];
    close: (event: React.MouseEvent) => void;
};
declare const _default: React.MemoExoticComponent<({ selector, content: Content, stepIndex, ...props }: Props) => JSX.Element>;
export default _default;
//# sourceMappingURL=Step.d.ts.map