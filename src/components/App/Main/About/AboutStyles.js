import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
    about: {
        padding: '60px 0'
    },
    about__link: {
        color: '#fa7252',
        fontSize: '13px',

        ':hover': {
            color: '#000',
            transition: 'color 0.2s linear'
        }
    },
    body: {
        width: '75%',
        float: 'left'
    },
    body__header: {
        margin: '0 0 20px'
    },
    body__image: {
        width: '40%',
        float: 'left',
        height: 'auto'
    },
    body__description: {
        width: '60%',
        float: 'right',
        paddingLeft: '60px'
    },
    body__text: {
        fontSize: '14px',
        margin: '0 0 16px'
    },
    list: {
        width: '100%',
        listStyle: 'none',
        clear: 'both',
        margin: '0 -1%',
        padding: '40px 0 0'
    },
    list__item: {
        width: '31%',
        float: 'left',
        overflow: 'hidden',
        margin: '1% 1%',
        padding: '0'
    },
    list__link: {
        background: '#fff',
        border: '1px solid #e5e5e5',
        color: '#000',
        display: 'block',
        fontWeight: 'bold',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        textTransform: 'uppercase',

        ':hover': {
            background: '#f0f0f0'
        }
    },
    sidebar: {
        width: '25%',
        float: 'right',
        paddingLeft: '45px'
    },
    sidebar__content: {
        border: '1px solid #e5e5e5',
        padding: '40px'
    },
    sidebar__header: {
        color: '#010101',
        fontWeight: '700',
        margin: '0 0 20px'
    },
    sidebar__list: {
        listStyle: 'none',
        borderBottom: '1px solid #e5e5e5',
        margin: '0 0 20px',
        padding: '5px 0 10px'
    },
    sidebar__link: {
        color: '#000',
        lineHeight: '1.6',
        padding: '8px 0',

        ':hover': {
            color: '#fa7252',
            transition: 'color 0.2s linear'
        }
    }
});
