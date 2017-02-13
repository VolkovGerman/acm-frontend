import {StyleSheet} from 'aphrodite/no-important';

import {adminColors} from '../../General/VariablesStyles';

export default StyleSheet.create({
    loginWrap: {
        background: [adminColors.background],
        width: '100%',
        height: '100vh',
        padding: '200px 0'
    },
    login: {
        width: '400px',
        margin: '0 auto',
        color: adminColors.mainColor
    },
    login__title: {
        textAlign: 'center',
        fontSize: '28px',
        margin: '30px 0'
    },
    login__main: {
        borderBottom: `1px solid #d8d8d8`,
    },
    login__footer: {
        padding: '15px 0',
        textAlign: 'center'
    },
    loginField: {
        width: '100%',
    },
    loginField__input: {
        display: 'block',
        width: '100%',
        padding: '8px 0px',
        textIndent: '12px',
        margin: '20px 0 0 0',
        boxShadow: '0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,.08) inset',
        border: '1px solid #c8c8c8',
        color: '#777777',
        outline: 'none',
        borderRadius: '3px',
        fontSize: '14px',
    },
    loginBtnWrap: {
        textAlign: 'right',
        margin: '15px'
    },
    loginBtn: {
        color: '#333333',
        background: '#ffffff',
        borderRadius: '3px',
        border: '1px solid #c8c8c8',
        padding: '8px 12px',
        fontSize: '12px',
        float: 'inline-block'
    }
});
