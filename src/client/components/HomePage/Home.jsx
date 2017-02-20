import React, {Component} from 'react';

import News from './NewsComponent/News';
import Events from './EventsComponent/Events';

require('./Home.scss');

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="content">
                    <div className="eventsWrap">
                        <Events events={this.props.pageParams.items.events}/>
                    </div>
                    <div className="newsWrap">
                        <News news={this.props.pageParams.items.news}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
