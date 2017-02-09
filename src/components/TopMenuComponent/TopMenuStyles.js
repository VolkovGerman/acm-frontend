import {StyleSheet} from 'aphrodite/no-important';
import {colors} from '../GeneralComponents/VariablesStyles';

export default StyleSheet.create({
    topMenu: {
        background: [colors.mainColor],
        borderBottom: '2px solid #e8e8e8'
    },
    topMenu__item: {
        float: 'left'
    },
    topMenu__link: {
        display: 'block',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '54px',
        padding: '0px 15px',

        ':hover': {
            background: [colors.hoverLink]
        }
    }
});
