import React, {Component} from 'react';
import {Link} from 'react-router';

import NavigationItem from './NavigationItemComponent/NavigationItem';

require('./Navigation.scss');

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <div className="navigation">
                    {this.props.navigation.map((item, index) =>
                        <div className="navigation__item" key={index}>
                            <NavigationItem navigation={item}/>
                        </div>
                    )}
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Navigation;
