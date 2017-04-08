import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import config from '../../../../core/config/general.config';
import devideProperties from '../../../../core/scripts/devidePropertiesByLanguage';

require('./Champs.scss');

const pageParams = {
    champLogo: require('../../../../../static/images/backgrounds/bsuir_acm.jpg'),
    breadcrumbs: [
        {
            link: '/champs',
            name: ['Чемпионат БГУИР', 'BSUIR Championship']
        },
    ]
};

const statusText = [
    ['Завершен', 'Открыт'],
    ['Closed', 'Open']
];

class ChampsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            champs: []
        }
    }

    loadingChamps = () => {
        fetch(`${config.server}/champs`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                let champs = devideProperties(_['_embedded']['champs']);
                this.setState({
                    champs: champs
                });
                this.props.updateLoadedStatus(true, 1);
            });
    };

    componentDidMount = () => {
        this.loadingChamps();
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        return (
            <div className="Champs">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                <div className="champsList clearfix">
                    {this.state.champs.map((item, index) =>
                        item.status ?
                            <div className="champItem" key={index}>
                                <Link className='champItem__link' to={`/champs/${item.id}`}>
                                    <div className="champItem__header">
                                        <div
                                            className="champItem__name">{item.title[this.props.lang.currentLangIndex]}</div>
                                        <div className="champItem__year">{item.year}</div>
                                    </div>
                                    <div
                                        className={item.isOpen ? `champItem__status champItem__status--active`
                                            : `champItem__status champItem__status--closed`}>
                                        {statusText[this.props.lang.currentLangIndex][item.isOpen]}
                                    </div>
                                </Link>
                            </div>
                            : <div key={index}></div>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(ChampsPage);
