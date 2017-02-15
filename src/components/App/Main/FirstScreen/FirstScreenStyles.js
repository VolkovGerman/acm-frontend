import {StyleSheet} from 'aphrodite/no-important';

import {colors} from '../../../General/VariablesStyles';
import fonts from '../../../General/FontsStyles';

export default StyleSheet.create({
    bgSlider: {
        background: 'url(/images/bg_slider_1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '0 0',
        width: '100%',
        height: '900px',
        padding: '65px 0'
    },
    logo: {
        display: 'block',
        background: 'url(/images/bsuir_logo_white.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: '0 0',
        width: '130px',
        height: '75px',
        position: 'absolute',
        top: '0',
        left: '0',
    },
    header: {
        margin: '0px 0'
    },
    logIn: {
        float: 'right',
        background: 'transparent',
        border: `1px solid ${colors.hoverLink}`,
        color: '#ffffff',
        fontSize: '14px',
        textTransform: 'uppercase',
        padding: '5px 10px',
        marginTop: '17px',
        ':hover': {
            cursor: 'pointer',
            opacity: '.85'
        }
    },
    main: {
        margin: '150px 250px 0 0'
    },
    main__title: {
        fontSize: '60px',
        lineHeight: '64px',
        color: '#ffffff',
        fontFamily: fonts.RalewayLight,

    }
});