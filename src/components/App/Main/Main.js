import React, {Component} from 'react';

import FirstScreen from './FirstScreen/FirstScreen';

class Main extends Component {
    render() {
        return (
            <div>
                <FirstScreen onLoad={this.props.onLoad} />
            </div>
        );
    }
}

export default Main;
