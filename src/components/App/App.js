import React, {Component} from 'react';
import {connect} from 'react-redux'
import $ from 'jquery';

import {requests} from '../../config/general';
import localizer from '../../config/localizer';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from '../Loader/Loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,
            dependentComponents: 2,
            loadedComponents: 0,
            showNews: false
        }
    }

    onComponentsLoaded() {
        this.setState({loadedComponents: this.state.loadedComponents + 1});
        if (this.state.loadedComponents === this.state.dependentComponents) {
            this.setState({showLoader: false});
        }
    }

    init() {
        $.get(`${requests.words}?lang=${localizer.lang}`,
        _ => {
            console.log(_);
            this.onComponentsLoaded();
        }, 'json');
    }

    componentWillMount() {
        this.init();
    }

    render() {
        let loader = this.state.showLoader ? <Loader/> : false;
        return (
            <div>
                {loader}
                <Header onLoaded={this.onComponentsLoaded.bind(this)}/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        ownProps: ownProps
    })
)(App);
