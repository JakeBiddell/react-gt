import React from 'react';
import { StepButtonWrapperProps } from './types';

const StepButtonWrapper = ({ stepButtons }: StepButtonWrapperProps) => (
    <div className="__react-gt__dot-wrapper">{stepButtons}</div>
);

export default StepButtonWrapper;
