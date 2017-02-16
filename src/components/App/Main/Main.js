import React, {Component} from 'react';

import FirstScreen from './FirstScreen/FirstScreen';
import News from './News/News';
import About from './About/About';

class Main extends Component {
    render() {
        return (
            <div>
                <FirstScreen onLoad={this.props.onLoad} />
                <About />
                <News />
            </div>
        );
    }
}

export default Main;
