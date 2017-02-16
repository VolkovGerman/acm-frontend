import {StyleSheet} from 'aphrodite/no-important';

import fonts from '../../../../General/FontsStyles';
import {colors} from '../../../../General/VariablesStyles';

export default StyleSheet.create({
    events: {
        position: 'relative',
        height: '250px',
        background: '#ffffff',
        textAlign: 'center',
        marginRight: '300px'
    },
    events__title: {
        position: 'absolute',
        left: '0',
        top: '50%',
        background: '#0F1725',
        transform: 'translateX(-50%) translateY(-50%) rotate(-90deg)',
        color: '#ffffff',
        padding: '15px 0',
        margin: '0 0 0 24px',
        width: '250px',
        textAlign: 'center'
    },
    event__link: {
        color: '#333333',
        ':hover': {
            color: colors.hoverLink
        }
    },
    eventsWrap: {
        padding: '35px 50px',
        display: 'inline-block',
        textAlign: 'center',
    },
    event: {
        float: 'left',
        width: '300px',
        padding: '15px',
        textAlign: 'left'
    },
    event__title: {
        fontSize: '14px',
        margin: '5px 0'
    },
    event__date: {
        fontSize: '12px',
        opacity: '.75'
    },
    dateBox: {
        border: '1px solid rgba(0, 0, 0, .25)',
        float: 'left',
        padding: '10px',
        textTransform: 'uppercase',
        marginRight: '15px'
    },
    dateBox__day: {
        fontSize: '16px',
        fontFamily: fonts.RalewayBold
    },
    dateBox__month: {
        fontSize: '12px',
        padding: '5px 0 0 0',
    }
});
