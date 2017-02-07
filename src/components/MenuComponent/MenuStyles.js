import { StyleSheet } from 'aphrodite/no-important';
import { colors } from '../GeneralComponents/VariablesStyles';

export default StyleSheet.create({
    menu: {
        background: [ colors.mainColor ],
        borderBottom: '2px solid #e8e8e8'
    },
    menu__ul: {
        display: 'inline-block'
    },
    menu__item: {
        display: 'block',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '54px',
        padding: '0px 15px',

        ':hover': {
            background: [ colors.hoverLink ]
        }
    },
    horizontalMenu__li: {
        float: 'left'
    }
});
