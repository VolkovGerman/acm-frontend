import { StyleSheet } from 'aphrodite/no-important';

import fonts from '../../../General/FontsStyles';

export default StyleSheet.create({
    news: {
        position: 'relative',

        minHeight: '600px',

        fontFamily: fonts.Raleway,

        overflowX: 'hidden',
        background: '#ffffff url(/images/bg_news.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    },

    news__header: {
        position: 'absolute',
        top: '50px',
        left: '250px',
        fontSize: '24px',
        color: '#ffffff'
    },

    news__main: {
        position: 'absolute',

        top: '160px',
        bottom: '60px',
        left: '0',
        width: '100%',

        zIndex: '1',
        overflow: 'hidden'
    },

    news__scroller: {
        position: 'absolute',

        width: '3330px',
        height: '100%',

        zIndex: '1',
        transform: 'translateZ(0)',

        userSelect: 'none',
        textSizeAdjust: 'none'
    },

    news__list: {
        margin: '0',
        padding: '0',

        width: '100%',
        height: '100%',

        listStyle: 'none',

        ':first-child': {
            marginLeft: '250px'
        }
    },

    newsItem: {
        position: 'relative',
        display: 'block',
        float: 'left',

        marginRight: '40px',
        padding: '20px',

        width: '400px',
        maxHeight: '100%',

        transition: 'background 0.5s',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',

        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }
    },

    newsItem_more: {
        padding: '0',
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    newsItem_more__link: {
        display: 'block',
        
        padding: '20px',

        color: '#5d5871',

        transition: 'textColor 0.5s',

        ':hover': {
            color: '#221c38'
        }
    },

    newsItem__header: {
        margin: '0 0 20px'
    },

    newsItem__title: {
        margin: '0 0 10px',
        padding: '0',

        fontWeight: 'bold'
    },

    newsItem__titleLink: {
        lineHeight: '1.2em',
        color: '#5d5871',

        ':hover': {
            color: '#221c38'
        }
    },

    newsItem__date: {
        fontStyle: 'italic'
    },  

    newsItem__description: {
        marginBottom: '20px',
        textAlign: 'justify'
    },

    newsItem__footer: {
    },

    newsItem__footerLink: {
        fontWeight: 'bold',
        color: '#5d5871',

        ':hover': {
            color: '#221c38'
        },

        ':after': {
            content: '"..."'
        }
    },



});
