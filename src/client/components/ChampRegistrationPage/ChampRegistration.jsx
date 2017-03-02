import React from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';
import InputWidget from '../Widgets/InputWidget/InputWidget';
import SelectWidget from '../Widgets/SelectWidget/SelectWidget';
import WidgetRow from '../LayoutsComponents/WidgetRow/WidgetRow';

require('./ChampRegistration.scss');

class ChampRegistration extends React.Component {
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
                name: 'Чемпионат БГУИР',
            },
            {
                link: '/champs/0/registration',
                name: 'Регистрация',
            }
        ];

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            breadcrumbs: this.createBreadcrumbs(nextProps)
        });
    };

    render = () => (
        <div className="ChampRegistration">
            <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
            <WidgetRow label={this.props.lang.email} name="team_email" required>
                <InputWidget name="team_email" type="email"/>
            </WidgetRow>
            <WidgetRow label={this.props.lang.team_name} name="team_name" required>
                <InputWidget name="team_name"/>
            </WidgetRow>
            <WidgetRow label={this.props.lang.university_site_address} name="team_site_link" required>
                <InputWidget name="team_site_link"/>
            </WidgetRow>
            <WidgetRow label={this.props.lang.country} name="team_country" required>
                <SelectWidget name="team_country" withEmpty/>
            </WidgetRow>
        </div>
    );

}

export default connect(
    state => ({
        lang: state.lang
    })
)(ChampRegistration);
