const getProps = (obj: Record<string, any>, selector: string) =>
    Object.entries(obj).reduce(
        (acc, [key, val], index, array) =>
            typeof val === 'object'
                ? `${acc}}${selector}${key}{${getProps(val, `${selector}${key}`)}`
                : `${acc}${key}:${val};`,
        '',
    );

const styleObjectToStyleString = (obj: Record<string, any>) =>
    Object.entries(obj).reduce((acc, [key, val]) => {
        const props = getProps(val, key);
        return `${acc}${key}{${props}${props[props.length - 1] != '}' ? '}' : ''}`;
    }, '');

const styleCreator = (
    primaryColor = '#00c19f',
    backgroundColor = 'background-color',
    border = 'border',
    display = 'display',
    color = 'color',
    cursor = 'cursor',
    width = 'width',
    height = 'height',
    borderRadius = 'border-radius',
    position = 'position',
    maxWidth = 'max-width',
    zIndex = 'z-index',
) =>
    styleObjectToStyleString({
        '.__react-gt__': {
            dot: {
                [cursor]: 'pointer',
                [display]: 'contents',
                [backgroundColor]: 'inherit',
                [border]: 'none',
                ' div': {
                    [width]: '10px',
                    [height]: '10px',
                    [backgroundColor]: 'inherit',
                    [border]: '1px solid #757575',
                    [borderRadius]: '50%',
                    'margin-right': '7px',
                    overflow: 'hidden',
                },
                ':hover div': {
                    [backgroundColor]: '#757575',
                },
                '-selected': {
                    ' div': {
                        [cursor]: 'default',
                        [backgroundColor]: primaryColor,
                        [border]: `1px solid ${primaryColor}`,
                    },
                    ':hover div': {
                        [backgroundColor]: primaryColor,
                    },
                },
            },
            'chevron-button': {
                [backgroundColor]: 'inherit',
                [border]: 'none',
                [color]: '#757575',
                [cursor]: 'pointer',
                ':disabled': {
                    [color]: '#e0e0e0',
                    [cursor]: 'default',
                },
                ':hover': {
                    [color]: '#212121',
                },
            },
            'page-selector': {
                [display]: 'flex',
                'justify-content': 'space-between',
            },
            'dot-wrapper': {
                [display]: 'flex',
                [maxWidth]: '200px',
                'flex-wrap': 'wrap',
                'align-items': 'center',
            },
            'close-button': {
                [backgroundColor]: 'transparent',
                [border]: 'none',
                [color]: '#757575',
                [cursor]: 'pointer',
                [position]: 'absolute',
                top: '12px',
                right: '15px',
                ':hover': {
                    [color]: '#212121',
                },
            },
            overlay: {
                [position]: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                [zIndex]: 999996,
            },
            'page-number': {
                [backgroundColor]: primaryColor,
                [color]: 'white',
                'box-shadow': 'rgb(0 0 0 / 30%) 0px 0.5em 3em',
                [width]: '40px',
                [height]: '40px',
                [borderRadius]: '50%',
                [display]: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                [position]: 'absolute',
                left: '-10px',
                top: '-10px',
            },
            modal: {
                [maxWidth]: '330px',
                'min-height': '48px',
                [position]: 'fixed',
                [backgroundColor]: '#fff',
                left: 0,
                top: 0,
                [borderRadius]: '8px',
                [zIndex]: 999999,
                'box-shadow': 'rgb(0 0 0 / 30%) 0px 0.5em 3em',
                '-content': {
                    overflow: 'hidden',
                    [height]: '100%',
                },
            },
            icon: {
                fill: 'currentColor',
                [width]: '1em',
                [height]: '1em',
                display: 'inline-block',
                'font-size': '1.5rem',
                transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                'flex-shrink': 0,
                'user-select': 'none',
            },
        },
    });
export default styleCreator();
