import React, {Component} from 'react';

import Header from './HeaderComponent/Header';
import Home from './HomePage/Home';
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
        ]
    }

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
