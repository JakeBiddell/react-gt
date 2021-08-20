import React from 'react';
import { Overrides } from './types';

type Props = { [key in keyof Omit<Overrides, 'dialogWrapper' | 'stepButton'>]: JSX.Element } & {
    content: JSX.Element;
};

const DialogWrapper = ({
    arrow,
    currentStepLabel,
    closeButton,
    content,
    previousStepButton,
    stepButtonWrapper,
    nextStepButton,
}: Props) => (
    <div className="__react-gt__modal">
        <div className="__react-gt__modal-content">
            {arrow}
            {currentStepLabel}
            {closeButton}
            {content}
            <div className="__react-gt__page-selector">
                {previousStepButton}
                {stepButtonWrapper}
                {nextStepButton}
            </div>
        </div>
    </div>
);

export default DialogWrapper;
