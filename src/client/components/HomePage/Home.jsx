import React, {Component} from 'react';

import News from './NewsComponent/News';
import Events from './EventsComponent/Events';

require('./Home.scss');

class Home extends Component {

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    componentWillMount = () => {
        this.props.updateLoadedStatus(true, 2);
    };

    render() {
        return (
            <div className="Home">
                <Events events={this.props.pageParams.items.events}/>
                <News isLoaded={this.props.isLoaded} updateLoadedStatus={this.props.updateLoadedStatus} />
            </div>
        );
    }
}

export default Home;
