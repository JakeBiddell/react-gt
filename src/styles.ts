const primaryColor = '#00c19f';

const backgroundColor = 'background-color';
const border = 'border';

export const reactGTSelector = '__react-gt__dot';
export const dotclass = `.${reactGTSelector}dot`;
export const selectedDotClass = `${dotclass}-selected`;

const styles = `
${dotclass} {
    cursor: pointer;
    display: contents;
    ${backgroundColor}: inherit;
    ${border}: none;
}
${dotclass} div {
    width: 10px;
    height: 10px;
    ${backgroundColor}: inherit;
    ${border}: 1px solid #757575;
    border-radius: 50%;
    margin-right: 7px;
    overflow: hidden;
}
${dotclass}:hover div{
    ${backgroundColor}: #757575;
}
${selectedDotClass} div{
    cursor: default;
    ${backgroundColor}: #00c19f;
    ${border}: 1px solid #00c19f;
}
${selectedDotClass}:hover div{
    ${backgroundColor}: #00c19f;
}
`;

export default styles;
