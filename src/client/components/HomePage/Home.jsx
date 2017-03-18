import React, {Component} from 'react';

import News from './NewsComponent/News';
import Events from './EventsComponent/Events';
// import TwoColumns from '../LayoutsComponents/TwoColumnsComponent/TwoColumns';
// import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./Home.scss');

// const pageParams = {
//     breadcrumbs: [
//         {
//             link: '/',
//             name: 'Главная'
//         }
//     ],
// }

class Home extends Component {
    render() {
        return (
            <div className="Home">
                {/*<Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>*/}
                <Events events={this.props.pageParams.items.events}/>
                <News news={this.props.pageParams.items.news}/>
            </div>
        );
    }
}

export default Home;
