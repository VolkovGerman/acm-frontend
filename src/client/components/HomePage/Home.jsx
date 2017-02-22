import React, {Component} from 'react';

import News from './NewsComponent/News';
import Events from './EventsComponent/Events';
import TwoColumns from '../LayoutsComponents/TwoColumnsComponent/TwoColumns';

require('./Home.scss');

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <TwoColumns layout={{
                    general: <News news={this.props.pageParams.items.news}/>,
                    sub: <Events events={this.props.pageParams.items.events}/>
                }}/>
            </div>
        );
    }
}

export default Home;
