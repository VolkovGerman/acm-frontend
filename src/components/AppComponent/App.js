import React, {Component} from 'react';
import {connect} from 'react-redux'
import {css} from 'aphrodite/no-important';

import Greeting from '../GreetingComponent/Greeting';
import Header from '../HeaderComponent/Header';
import styles from './AppStyles';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className={css(styles.app)}>
                    <button onClick={this.props.asyncGetGeneralInfo}>Get hello!</button>
                </div>
                <Greeting />
            </div>
        );
    }
}

export default connect(
    state => ({
        menuStore: state.menu,
    }),
    dispatch => ({
        asyncGetGeneralInfo: () => {
            const asyncGetGeneralInfo = () => dispatch => {
                setTimeout(() => {
                    console.log('I get info');
                }, 2000);
            }
            dispatch(asyncGetGeneralInfo())
        }
    })
)(App);
