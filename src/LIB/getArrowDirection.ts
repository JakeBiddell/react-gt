import { ArrowDirections } from 'src/types';

const getArrowDirection = ({ top, left, height, width }: DOMRect): ArrowDirections =>
    top < -height
        ? 'up'
        : top > window.innerHeight - 10
        ? 'down'
        : left > window.innerWidth - 10
        ? 'right'
        : left < -width
        ? 'left'
        : null;

export default getArrowDirection;
