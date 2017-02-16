import {StyleSheet} from 'aphrodite/no-important';

import fonts from '../../../../General/FontsStyles';

export default StyleSheet.create({
    events: {
        position: 'relative',
        height: '250px',
        background: '#ffffff',
        textAlign: 'center'
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
    eventsWrap: {
        padding: '50px',
        display: 'inline-block',
        textAlign: 'center'
    },
    event: {
        float: 'left',
        width: '300px',
        padding: '15px'
    },
    dateBox: {
        border: '1px solid rgba(0, 0, 0, .25)',
        float: 'left',
        padding: '10px',
        textTransform: 'uppercase'
    },
    dateBox__day: {
      fontSize: '16px',
        fontFamily: fonts.RalewayBold
    },
    dateBox__month: {
        fontSize: '12px',
        padding: '5px 0 0 0'
    }
});
