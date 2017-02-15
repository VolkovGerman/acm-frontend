import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
    news: {
        position: 'relative',
        
        height: '500px',

        overflowX: 'hidden',
        background: '#ffffff url(/images/bg_news.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    },

    news__main: {
        position: 'absolute',
	    
	    top: '80px',
	    bottom: '80px',
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
        display: 'block',
        float: 'left',

        marginRight: '40px',
        padding: '20px',

        width: '400px',
        height: '100%',

        backgroundColor: '#ffffff',
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
