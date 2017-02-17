import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
    navigation: {
        padding: '90px 0 65px'
    },
    paragraph: {
        width: '20%',
        float: 'left'
    },
    paragraph__header: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingBottom: '20px',
        textTransform: 'uppercase'
    },
    paragraph__list: {
        listStyle: 'none'
    },
    paragraph__link: {
        color: '#666',
        fontSize: '12px',

        ':hover': {
            color: '#fa7252',
            transition: 'color 0.2s linear'
        }
    },
    contacts: {
        fontSize: '13px',
        borderTop: '1px solid #e5e5e5',
        textAlign: 'center',
        marginBottom: '50px'
    },
    contacts__list: {
        listStyle: 'none',
        margin: '45px auto 15px auto',
    },
    contacts__item: {
        display: 'inline-block',
        fontWeight: '700',
        borderRight: '1px solid #666',
        padding: '0 8px',

        ':last-child': {
            border: 'none'
        }
    },
    contacts__link: {
        color: '#666',

        ':hover': {
            color: '#fa7252',
            transition: 'color 0.2s linear'
        }
    }
});
