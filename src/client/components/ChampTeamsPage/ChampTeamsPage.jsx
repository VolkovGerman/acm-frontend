import React from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';
import DefaultHeader from '../Headers/DefaultHeader/DefaultHeader';
import TableWidget from '../Widgets/TableWidget/TableWidget';

require('./ChampTeamsPage.scss');

class ChampTeamsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breadcrumbs: this.createBreadcrumbs(props)
        };
    }

    createBreadcrumbs = (props) =>
        [
            {
                link: '/',
                name: props.lang.home,
            },
            {
                link: '/champs/0',
                name: props.lang.bsuir_champ,
            },
            {
                link: '/champs/0/teams',
                name: props.lang.teams,
            }
        ];

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            breadcrumbs: this.createBreadcrumbs(nextProps)
        });
    };

    componentDidMount = () => {
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () =>
        <div className="ChampTeamsPage">
            <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
            <DefaultHeader name={this.props.lang.registered_teams}/>
            <TableWidget />
        </div>
}

export default connect(
    state => ({
        lang: state.lang
    })
)(ChampTeamsPage);
