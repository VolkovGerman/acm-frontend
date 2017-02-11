import React, {Component} from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,
            dependentComponents: 2,
            loadedComponents: 0
        }
    }

    onComponentsLoaded() {
        this.setState({loadedComponents: this.state.loadedComponents + 1});
        if (this.state.loadedComponents === this.state.dependentComponents) {
            this.setState({showLoader: false});
        }
    }

    render() {
        let loader = this.state.showLoader ? <Loader/> : false;
        return (
            <div>
                {loader}
                <Header onLoaded={this.onComponentsLoaded.bind(this)}/>
                <Main onLoaded={this.onComponentsLoaded.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

export default App;
