export declare type CRMTourContextValues = {
    open: (atStep?: number) => void;
    close: () => void;
    isOpen: boolean;
    steps: ReactGTStep[];
};
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
//# sourceMappingURL=types.d.ts.map