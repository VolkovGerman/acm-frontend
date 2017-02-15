import React, {Component} from 'react';

import FirstScreen from './FirstScreen/FirstScreen';
import News from './News/News';

class Main extends Component {
    render() {
        return (
            <div>
                <FirstScreen onLoad={this.props.onLoad} />
                <News />
            </div>
        );
    }
}

export default Main;
