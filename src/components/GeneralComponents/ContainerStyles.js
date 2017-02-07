import { StyleSheet } from 'aphrodite/no-important';
import { media } from './VariablesStyles';

export default StyleSheet.create({
    container: {
        margin: '0 auto',
        padding: '0 15px',

        [ media.sm ]: {
            width: '750px'
        },

        [ media.md ]: {
            width: '970px'
        },

        [ media.lg ]: {
            width: '1170px'
        }
    }
});