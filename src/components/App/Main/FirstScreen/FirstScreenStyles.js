import {StyleSheet} from 'aphrodite/no-important';

import {colors} from '../../../General/VariablesStyles';
import fonts from '../../../General/FontsStyles';

export default StyleSheet.create({
    bgSlider: {
        background: 'url(/images/bg_slider_1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '0 0',
        width: '100%',
        height: '980px',
        padding: '65px 0',
        fontFamily: fonts.Roboto,
        position: 'relative'
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
        margin: '0'
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
        margin: '150px 0 0 0',
        height: '700px',
        paddingBottom: '250px'
    },
    mainTitle: {
        marginRight: '315px'
    },
    mainTitle__title: {
        fontSize: '60px',
        lineHeight: '64px',
        color: '#ffffff',
        fontFamily: fonts.RalewayLight,
    },
    mainTitle__description: {
        fontSize: '22px',
        color: '#ffffff',
        lineHeight: '26px',
        margin: '30px 0'
    },
    motivationWrap: {
        textAlign: 'right',
    },
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: '0',
        left: '0',
    },
    videoWrap: {
        float: 'right',
        width: '300px',
        background: '#ffffff',
        height: '250px',
        color: '#ffffff',
        position: 'relative',
        ':before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .25)'
        },
        ':hover': {
            cursor: 'pointer',
            ':before': {
                display: 'none'
            }
        }
    },
    video: {
        width: '100%',
        height: '100%',
    },
    video__play: {
        background: 'url(images/icons/play_icon.png) center center no-repeat',
        backgroundSize: '242px 168px',
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});
