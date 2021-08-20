import { Position } from '../types';

const calculateModalPosition = (
    { top, left, right, width, height, bottom }: DOMRect,
    modalHeight: number,
): Position => {
    const result: Position = {};
    const { clientWidth: docWidth, clientHeight: docHeight } = document.documentElement;

    // calculate the size of the margins around the element (space between the element and adge of screen)
    const leftMargin = left;
    const rightMargin = docWidth - (width + left);
    const topMargin = top;
    const bottomMargin = docHeight - bottom;

    result.width = docWidth < 350 ? docWidth : 330;
    result.height = modalHeight;

    const horizontalAlign = () => {
        if (topMargin > bottomMargin) {
            // align bottom of modal with bottom of element
            // this is because the top margin is bigger than the bottom margin giving the modal more room to grow
            result.bottom = bottom;
        } else {
            // align top of modal with top of element
            result.top = topMargin;
        }
    };
    const vertialAlign = () => {
        // if left margin is bigger than right align with left, unless the space is to narrow then alight
        if (leftMargin > rightMargin) {
            if (left + width < result.width) {
                result.left = 0;
            } else {
                result.right = docWidth - right;
            }
        } else if (docWidth - left < result.width) {
            result.right = 0;
        } else {
            result.left = left;
        }
    };

    // Add modal to left side if there is more space on the left than the right and enough space to fit the modal
    if (leftMargin > rightMargin && leftMargin >= result.width) {
        // set modals right border to align with elements left border with 10px gap
        result.right = docWidth - left;
        horizontalAlign();
    }
    // Add Modal to Right side if there is enough space
    else if (rightMargin >= result.width) {
        // Set modals left border to align with Elements right border with 10px gap
        result.left = left + width;
        horizontalAlign();
    }
    // Add modal above element if top margin is bigger than the bottom margin and there is enough space
    else if (topMargin > bottomMargin && topMargin > modalHeight) {
        // align bottom of modal with top of element
        result.bottom = top;
        vertialAlign();
    }
    // Add modal under element if there is enough space
    else if (bottomMargin > modalHeight) {
        // align top of result with bottom of element
        result.top = top + height;
        vertialAlign();
    }
    // If the modal doesnt fit anywhere else put the modal in the center of the element
    else {
        result.top = top + height / 3;
        result.left = left + 10 + width / 2 - result.width / 2;
    }
    // make sticky
    if (result.top < 0) result.top = 0;
    if (result.bottom > window.innerHeight) result.bottom = window.innerHeight;
    if (result.left < 0) result.left = 0;
    if (result.right > window.innerWidth) result.right = window.innerWidth;
    return result;
};

export default calculateModalPosition;
