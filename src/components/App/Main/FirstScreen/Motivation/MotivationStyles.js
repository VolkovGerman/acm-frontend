import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
    motivation: {
        background: 'rgba(0,0,0,.35)',
        color: '#ffffff',
        padding: '15px 30px',
        width: '300px',
        display: 'inline-block',
        textAlign: 'left',
    },
    motivation__item: {
        padding: '15px 0',
        borderBottom: '1px solid rgba(255, 255, 255, .75)',
        ':last-child': {
            borderBottom: 'none'
        }
    },
    motivation__title: {
        paddingBottom: '15px'
    },
    motivation__description: {
        fontSize: '12px',
        opacity: '.75',
        lineHeight: '18px'
    }
});
