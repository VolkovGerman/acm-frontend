import React, {Component} from 'react';

import Header from './HeaderComponent/Header';
import Breadcrumbs from './BreadcrumbsComponent/Breadcrumbs';

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
                <div className="contentWrap">
                    <div className="container">
                        <div className="content">
                            <div className="content__header">{pageParams.title}</div>
                            <div className="content__main">
                                <div className="breadcrumbsWrap">
                                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                                </div>
                                {childrenWithProps}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Client;
