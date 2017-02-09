import React, {Component} from 'react';
import {connect} from 'react-redux'
import {css} from 'aphrodite/no-important';
import $ from 'jquery';

import styles from './GreetingStyles';

class Greeting extends Component {

    loadText() {
        $.get('https://fksis-backend.herokuapp.com/content',
            response => {
                console.log(response);
            }, "JSON");
    }

    render() {
        return (
            <div>
                <div className={css(styles.greeting)}>Greeting</div>
                <button onClick={this.loadText.bind(this)}>getText</button>
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
)(Greeting);
