import React, {Component} from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookie';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from '../../core/components/loaders/CssSquareLoader/CssSquareLoader';

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
};

class Client extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLang: {
                ru: true,
                en: false
            },
            isLoaded: false,
            numberOfLoadedComponents: 0
        };

        this.toggleLang = this.toggleLang.bind(this);
        this.updateLoadedStatus = this.updateLoadedStatus.bind(this);
        this.isLoaded = this.isLoaded.bind(this);
    }

    updateLoadedStatus = (isLoaded, numberOfComponents) => {

        if (isLoaded) {
            this.setState(_ => ({
                currentLang: _.currentLang,
                isLoaded: _.numberOfLoadedComponents + 1 == numberOfComponents,
                numberOfLoadedComponents: _.numberOfLoadedComponents + 1
            }));
        }
    };

    isLoaded = () =>
        this.state.isLoaded;

    setLoader = () => {
        this.setState(_ => ({
            blockTitle: _.blockTitle,
            isLoaded: false,
            numberOfLoadedComponents: 0
        }));
        this.state.isLoaded = false;
    };

    updateCurrentLang(currentLang) {
        let state = this.state;
        let i = 0;
        let langIndex = 0;
        for (let key in state.currentLang) {
            state.currentLang[key] = key == currentLang;
            if (state.currentLang[key]) {
                langIndex = i;
            }
            i++;
        }
        this.setState(state);

        let loadLang = require(`../stores/${currentLang}.lang.json`);
        loadLang.currentLangIndex = langIndex;
        loadLang.currentLang = currentLang;
        this.props.onInitLang(loadLang)
    }

    toggleLang(e, currentLang) {
        e.preventDefault();

        this.updateCurrentLang(currentLang);
        cookie.save('acm_lang', currentLang, {path: '/', maxAge: 31536000});
    }

    componentWillMount() {
        let currentLang = cookie.load('acm_lang');
        if (!currentLang) {
            currentLang = 'ru';
        }
        this.updateCurrentLang(currentLang) ;
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                pageParams: pageParams,
                updateLoadedStatus: this.updateLoadedStatus,
                isLoaded: this.isLoaded,
                setLoader: this.setLoader,
                finalizeContent: this.finalizeContent
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
                            {!this.state.isLoaded &&
                            <div className="content__loader">
                                <Loader/>
                            </div>
                            }
                            <div className={!this.state.isLoaded ? 'hidden' : 'content__main'}>
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
