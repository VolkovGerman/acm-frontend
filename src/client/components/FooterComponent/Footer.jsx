import React, {Component} from 'react';
import {Link} from 'react-router';

import Credits from './CreditsComponent/Credits';

require('./Footer.scss');

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="bgSlider">
                    <div className="container">
                        <div className="footer">
                            <Credits />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
