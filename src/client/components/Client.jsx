import React, {Component} from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookie';

import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';

require('./Client.scss');

let pageParams = {
    title: 'ACM BSUIR',
    items: {
        news: [
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            },
            {
                id: 5
            },
            {
                id: 6
            }
        ],
        events: [
            {
                id: 1,
                rang: 'new'
            },
            {
                id: 2,
                rang: 'old'
            },
            {
                id: 3,
                rang: 'old'
            }
        ]
    },
    news: {
        id: 1
    },
    navigation: [
        {
            title: 'Чемпионат БГУИР',
            items: [
                {
                    link: '#',
                    name: 'Подробнее о чемпионате'
                },
                {
                    link: '#',
                    name: 'Регистрация'
                },
                {
                    link: '#',
                    name: 'Зарегистрированные команды'
                },
            ]
        },
        {
            title: 'Соревнования',
            items: [
                {
                    link: '#',
                    name: 'ACM ICPC'
                },
                {
                    link: '#',
                    name: 'TopCoder'
                },
                {
                    link: '#',
                    name: 'Google Code Jam'
                },
                {
                    link: '#',
                    name: 'Imagine Cup'
                }
            ]
        },
        {
            title: 'Школа олимпиадника',
            items: [
                {
                    link: '#',
                    name: 'График занятий'
                },
                {
                    link: '#',
                    name: 'Преподаватели'
                },
                {
                    link: '#',
                    name: 'Список лекций'
                },
                {
                    link: '#',
                    name: 'Список лекций'
                },
                {
                    link: '#',
                    name: 'Архив'
                }
            ]
        }
    ]
}

class Client extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLang: {
                ru: true,
                en: false
            }
        };

        this.toggleLang = this.toggleLang.bind(this);
    }

    updateCurrentLang(currentLang) {
        let state = this.state;
        for (let key in state.currentLang) {
            state.currentLang[key] = key == currentLang ? true : false;
        }
        this.setState(state);

        let loadLang = require(`../stores/${currentLang}.lang.json`);
        this.props.onInitLang(loadLang)
    }

    toggleLang(e, currentLang) {
        e.preventDefault();

        this.updateCurrentLang(currentLang);
        cookie.save('acm_lang', currentLang, {path: '/', maxAge: 31536000});
    }

    componentWillMount() {
        let currentLang = cookie.load('acm_lang');
        if(!currentLang) {
            currentLang = 'ru';
        }
        this.updateCurrentLang(currentLang) ;
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                pageParams: pageParams
            })
        );

        return (
            <div className="Client">
                <Header />
                <div className="containerWrap">
                    <div className="container">
                        <div className="content">
                            <div className="content__header">
                                <div className="content__title">
                                    {this.props.lang.title}
                                </div>
                                <div className="content__langs">
                                    <a className={this.state.currentLang.ru ? "lang lang--active" : "lang"}
                                       href="#" onClick={_ => this.toggleLang(_, 'ru')}>рус</a>
                                    <a className={this.state.currentLang.en ? "lang lang--active" : "lang"}
                                       href="#" onClick={_ => this.toggleLang(_, 'en')}>eng</a>
                                </div>
                            </div>
                            <div className="content__main">
                                {childrenWithProps}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer navigation={pageParams.navigation}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    }),
    dispatch => ({
        onInitLang: _ => dispatch({type: 'INIT_LANG', payload: _})
    })
)(Client);
