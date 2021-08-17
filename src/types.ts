export type CRMTourContextValues = {
    open: (atStep?: number) => void;
    close: () => void;
    isOpen: boolean;
    steps: ReactGTStep[];
};

export type ReactGTStep = {
    content: ({ step }: { step: number }) => JSX.Element;
    selector: string;
    stepInteraction?: boolean;
};

export type Position = {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
};
