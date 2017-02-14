import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
    newsw: {
        overflowX: 'scroll'
    },

    news__main: {
        position: 'relative',
        overflowX: 'hidden'
    },

    news__list: {
        position: 'absolute',
        left: '0',
        top: '0',
        display: 'block',

        padding: '40px 0',
        margin: '0',

        width: '2000px'
    },

    newsItem: {
        display: 'inline-block',
        boxSizing: 'border-box',

        marginRight: '20px', 
        padding: '20px',

        width: '200px',
        minHeight: '200px',

        backgroundColor: 'green',
    }
});
