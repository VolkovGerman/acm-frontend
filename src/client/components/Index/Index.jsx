import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Index extends React.Component {

    componentDidMount() {
        this.props.handleInitLang('en');
    }

    render() {
        return (
            <div>
                <Header langs={this.props.langs}/>
                <Footer langs={this.props.langs}/>
            </div>
        );
    }

}