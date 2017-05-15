import {StyleSheet} from 'aphrodite/no-important';
import {colors} from '../General/VariablesStyles';

export default StyleSheet.create({
    mainMenu: {
        display: 'block',
    },
    mainMenu__item: {
        float: 'left',
        listStyle: 'none'
    },
    mainMenu__link: {
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
