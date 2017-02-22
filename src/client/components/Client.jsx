import React, {Component} from 'react';

import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import Breadcrumbs from './BreadcrumbsComponent/Breadcrumbs';
import Navigation from './NavigationComponent/Navigation';

require('./Client.scss');

let pageParams = {
    title: 'ACM BSUIR',
    breadcrumbs: [
        {
            link: '/',
            name: 'Главная'
        }
    ],
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
                id: 2
            },
            {
                id: 3
            }
        ],
        events: [
            {
                id: 1,
                rang: 'hot'
            },
            {
                id: 2,
                rang: 'open'
            },
            {
                id: 3,
                rang: 'close'
            }
        ]
    },
    news: {
        id: 1
    },
    breadcrumbs: [
        {
            link: '/',
            name: 'Главная'
        },
        {
            link: '/news',
            name: 'Новость'
        }
    ],
    navigation: [
        {
            title: 'Чемпионат БГУИР 2016',
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
            title: 'Чемпионат БГУИР',
            items: [
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                }
            ]
        },
        {
            title: 'Чемпионат БГУИР',
            items: [
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                }
            ]
        },
        {
            title: 'Чемпионат БГУИР',
            items: [
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                },
                {
                    link: '#',
                    name: 'Чемпионат БГУИР 2016'
                }
            ]
        }
    ]
}

class Client extends Component {
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
                            <div className="content__header">{pageParams.title}</div>
                            <div className="content__main">
                                <div className="breadcrumbsWrap">
                                    <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                                </div>
                                {childrenWithProps}
                            </div>
                            <div className="content__footer">
                                <Navigation navigation={pageParams.navigation}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer content={pageParams.footer}/>
            </div>
        );
    }
}

export default Client;
