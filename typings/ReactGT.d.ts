import React from 'react';
import { Overrides, ReactGTStep } from './types';
declare type ReactGTProps = {
    open: boolean;
    onClose: () => void;
    openAt?: number;
    steps: ReactGTStep[];
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    transitionSpeed?: number;
    overrides?: Partial<Overrides>;
};
declare const _default: React.MemoExoticComponent<({ open, onClose, steps, openAt, scrollIntoViewOptions, overrides, }: ReactGTProps) => JSX.Element>;
export default _default;
//# sourceMappingURL=ReactGT.d.ts.map