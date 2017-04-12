import React from 'react';
import {Link} from 'react-router';

import dictionary from './Footer.words';

import './Footer.scss';

export default (props) =>
    <div className="Footer">
        <div className="bgSlider">
            <div className="container">
                <div className="footer">
                    <div className="credits">
                        <div>{dictionary.acm[props.langs.data]}</div>
                        <Link className="credits__link" to="/">{dictionary.bsuir[props.langs.data]} 2017</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
