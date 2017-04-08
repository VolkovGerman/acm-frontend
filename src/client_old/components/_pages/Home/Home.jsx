import React, {Component} from 'react';

// Refactor this after creating News page with filters
import News from '../../NewsList/NewsList';
import Events from './EventsList/Events';

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
