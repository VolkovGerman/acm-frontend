import React, {Component} from 'react';

require('./Home.scss');

class Home extends Component {

    componentDidMount = ()  => {
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () =>
        <div>
            Home
        </div>
}

export default Home;
