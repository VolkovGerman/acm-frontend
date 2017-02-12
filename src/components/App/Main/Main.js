import React, {Component} from 'react';

import News from './News/News';

class Main extends Component {
    render() {
        return (
            <div>
                <News onLoaded={this.props.onLoaded}/>
            </div>
        );
    }
}

export default Main;
