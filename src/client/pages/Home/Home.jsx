import React from 'react';

// Refactor this after creating News page with filters
import Events from './Events/Events';
import News from './News/News';

import './Home.scss';

const EVENTS_SIZE = 3;

class Home extends React.Component {

    componentDidMount() {
        this.props.handleLoadingNews();
        this.props.handleLoadingEvents(EVENTS_SIZE);
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
