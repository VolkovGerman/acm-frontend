import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
    news: {
        position: 'relative',
        backgroundColor: 'grey',
        overflowX: 'hidden',
        height: '500px'
    },

    news__main: {
        position: 'absolute',
	    zIndex: '1',
	    top: '45px',
	    bottom: '48px',
	    left: '0',
	    width: '100%',
	    background: '#ccc',
	    overflow: 'hidden'
    },

    news__scroller: {
        position: 'absolute',
	    zIndex: '1',
	    width: '5000px',
	    height: '100%',
	    backgroundColor: '#a00',
	    transform: 'translateZ(0)',
	    userSelect: 'none',
    	textSizeAdjust: 'none'
    },

    news__list: {
        listStyle: 'none',
	    padding: '0',
	    margin: '0',
	    width: '100%',
	    height: '100%',
	    textAlign: 'center'
    },

    newsItem: {
        display: 'block',
        float: 'left',
        width: '400px',
        height: '100%',
        borderRight: '1px solid #ccc',
        backgroundColor: '#fafafa',
        fontSize: '14px'
    },

    newsItem__title: {
        fontWeight: 'bold'
    },

    newsItem__titleLink: {
        color: 'green'
    },

    newsItem__description: {
        fontStyle: 'italic'
    },

    newsItem__descriptionLink: {
        color: 'green'
    }

});
