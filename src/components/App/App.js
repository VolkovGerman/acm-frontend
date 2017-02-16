import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';

import styles from './AppStyles';
import {requests} from '../../config/general';
import localizer from '../../config/localizer';
import Loader from '../Loader/Loader';
import Main from './Main/Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,
            dependentComponents: 1,
            loadedComponents: 0,
            showNews: false
        }
    }

    onComponentsLoaded() {
        this.setState(_ => ({loadedComponents: _.loadedComponents + 1}));
        if (this.state.loadedComponents === this.state.dependentComponents) {
            this.setState({showLoader: false});
        }
    }

    init() {
        fetch(`${requests.words}?lang=${localizer.lang}`)
            .then(_ => _.json())
            .then(_ => {
                this.props.onInit(_);
                this.onComponentsLoaded();
            });
    }

    componentWillMount() {
        this.init();
    }

    render() {
        let loader = this.state.showLoader ? <Loader/> : false;
        return (
            <div className={css(styles.app)}>
                {loader}
                <Main onLoad={this.onComponentsLoaded.bind(this)}/>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        ownProps: ownProps,
        dictionary: state.dictionary
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_DICTIONARY', payload: _})
    })
)(App);
