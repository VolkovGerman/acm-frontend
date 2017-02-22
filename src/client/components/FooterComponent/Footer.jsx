import React, {Component} from 'react';
import {Link} from 'react-router';

import Navigation from './NavigationComponent/Navigation';
import Credits from './CreditsComponent/Credits';

require('./Footer.scss');

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="bgSlider">
                    <div className="container">
                        <div className="footer">
                            <Navigation navigation={this.props.navigation}/>
                            <Credits />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
