import React from 'react';

import Events from './Events/Events';
import News from './News/News';

import './Home.scss';

const EVENTS_SIZE = 3;

class Home extends React.Component {

    componentDidMount() {
        !this.props.news.data.length ? this.props.handleLoadingNews() : null;
        !this.props.events.data.length ? this.props.handleLoadingEvents(EVENTS_SIZE) : null;
    }

    render() {
        return (
            <div className="Home">
                <Events {...this.props}/>
                <News {...this.props}/>
            </div>
        );
    }
}

export default Home;
