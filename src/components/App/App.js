import React, {Component} from 'react';
import {connect} from 'react-redux'
import {css} from 'aphrodite/no-important';

import Greeting from '../Greeting/Greeting';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import styles from './AppStyles';

class App extends Component {
    render() {
        return (
            <div>
                <Loader />
                <Header />
                <div className={css(styles.app)}>
                    <button onClick={this.props.asyncGetGeneralInfo}>Get hello!</button>
                </div>
                <Greeting />
                <Footer />
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
