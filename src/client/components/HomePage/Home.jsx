import React, {Component} from 'react';

import News from './NewsComponent/News';
import Events from './EventsComponent/Events';

require('./Home.scss');

class Home extends Component {

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        return (
            <div className="Home">
                <Events updateLoadedStatus={this.props.updateLoadedStatus} events={this.props.pageParams.items.events}/>
                <News isLoaded={this.props.isLoaded} updateLoadedStatus={this.props.updateLoadedStatus} finalizeContent={this.props.finalizeContent} />
            </div>
        );
    }
}

export default Home;
