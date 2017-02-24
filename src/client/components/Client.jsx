import React, {Component} from 'react';

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

export default Client;
