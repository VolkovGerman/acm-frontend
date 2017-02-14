import React, {Component} from 'react';
import {connect} from 'react-redux'

import {requests} from '../../config/general';
import localizer from '../../config/localizer';
import Loader from '../Loader/Loader';
import FirstScreen from './Main/FirstScreen/FirstScreen';
import News from './Main/News/News';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,
            dependentComponents: 0,
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
            <div>
                {/*{loader}*/}
                <FirstScreen />
                <News />
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
