import {StyleSheet} from 'aphrodite/no-important';
import {colors} from '../General/VariablesStyles';

export default StyleSheet.create({
    loaderWrap: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
        backgroundImage: 'url(/images/loader.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    }
});
