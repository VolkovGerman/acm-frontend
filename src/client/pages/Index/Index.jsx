import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import dictionary from './Index.words';

import './Index.scss';

export default class Index extends React.Component {

    componentDidMount() {
        this.props.handleInitLang('en');
    }

    render() {
        return (
            <div className="Index">
                <Header langs={this.props.langs}/>s
                <div className="containerWrap">
                    <div className="container">
                        <div className="content">
                            <div className="content__header">
                                <div className="content__title">
                                    {dictionary.title[this.props.langs.data]}
                                </div>
                                <div className="content__langs">
                                    <button className={this.props.langs.data == 'ru' ? "lang lang--active" : "lang"}
                                       onClick={this.props.handleInitLang.bind(null, 'ru')}>рус</button>
                                    <button className={this.props.langs.data == 'en' ? "lang lang--active" : "lang"}
                                       onClick={this.props.handleInitLang.bind(null, 'en')}>eng</button>
                                </div>
                            </div>
                            <div className='content__main'>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer langs={this.props.langs}/>
            </div>
        );
    }

}