import { MouseEventHandler } from 'react';
declare type ButtonType = {
    direction: -1 | 1;
    disabled: boolean;
    onClick: MouseEventHandler;
};
declare const ChevronButton: ({ direction, disabled, onClick }: ButtonType) => JSX.Element;
export default ChevronButton;
//# sourceMappingURL=ChevronButton.d.ts.map