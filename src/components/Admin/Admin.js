import React, {Component} from 'react';

class Admin extends Component {
    static onEnter(nextState, replace) {
        if (false) {
            replace('/login');
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Admin;
