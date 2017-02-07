import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    row: {
        ':after': {
            content: '""',
            clear: 'both',
            display: 'table'
        },
        ':before': {
            content: '""',
            clear: 'both',
            display: 'table'
        }
    }
});
