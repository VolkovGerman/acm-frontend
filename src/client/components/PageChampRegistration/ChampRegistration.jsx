import React from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../Widgets/Breadcrumbs/Breadcrumbs';
import InputWidget from '../Widgets/Input/Input';
import SelectWidget from '../Widgets/Select/Select';
import WidgetRow from '../LayoutsLib/WidgetRow/WidgetRow';
import Slide from '../LayoutsLib/Slide/Slide';
import SlideShow from '../LayoutsLib/SlideShow/SlideShow';

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
                name: props.lang.bsuir_champ,
            },
            {
                link: '/champs/0/registration',
                name: props.lang.registration,
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

    render = () => (
        <div className="ChampRegistration">
            <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
            <SlideShow>
                <Slide title={this.props.lang.registration_information_about_team}>
                    <WidgetRow label={this.props.lang.registration_email} name="team_email" required>
                        <InputWidget name="team_email" type="email"/>
                    </WidgetRow>
                    <WidgetRow label={this.props.lang.registration_team_name} name="team_name" required>
                        <InputWidget name="team_name"/>
                    </WidgetRow>
                    <WidgetRow label={this.props.lang.registration_country} name="team_country" required>
                        <SelectWidget name="team_country" options={this.props.lang.countries} withEmpty withAdding/>
                    </WidgetRow>
                    <WidgetRow label={this.props.lang.registration_university_full_name}
                               name="team_university_full_name"
                               required>
                        <SelectWidget name="team_university_full_name" options={this.props.lang.universities} withEmpty
                                      withAdding/>
                    </WidgetRow>
                    <WidgetRow label={this.props.lang.registration_university_acronym} name="team_university_acronym"
                               required>
                        <InputWidget name="team_university_acronym"/>
                    </WidgetRow>
                    <WidgetRow label={this.props.lang.registration_university_site_address} name="team_site_link">
                        <InputWidget name="team_site_link"/>
                    </WidgetRow>
                    <WidgetRow label={this.props.lang.registration_the_number_of_members_in_a_team} name="team_size"
                               required>
                        <SelectWidget name="team_size" options={this.props.lang.team_size} withEmpty withAdding/>
                    </WidgetRow>
                </Slide >
                <Slide title={`${this.props.lang.registration_information_about_participant} 1`}>
                    1
                </Slide>
                <Slide title={`${this.props.lang.registration_information_about_participant} 2`}>
                    2
                </Slide>
                <Slide title={`${this.props.lang.registration_information_about_participant} 3`}>
                    3
                </Slide>
            </SlideShow>
        </div>
    );

}

export default connect(
        state => ({
            lang: state.lang
        })
)(ChampRegistration);
