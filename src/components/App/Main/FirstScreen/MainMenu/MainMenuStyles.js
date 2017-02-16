import {StyleSheet} from 'aphrodite/no-important';

import {colors} from '../../../../General/VariablesStyles';

export default StyleSheet.create({
    mainMenu: {
        float: 'right',
        listStyle: 'none',
    },
    mainMenu__item: {
        float: 'left'
    },
    mainMenu__link: {
        display: 'block',
        textTransform: 'uppercase',
        color: '#ffffff',
        marginRight: '30px',
        lineHeight: '65px',
        transition: 'all 0.3s ease-out',
        fontSize: '14px',
        ':hover': {
            color: colors.hoverLink
        }
    }
});
