import React from 'react';
import InputMoment from 'input-moment';
import moment from 'moment';

import './DatePicker.scss';

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moment: moment(props.value)
        };
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
    };

    handleChange = (moment) => {
        this.setState({
            moment: moment
        });
    };

    render = () =>
        <div className="WidgetDatePicker">
            <div id="momentInput">
                <input className="WidgetDatePicker__input"
                       id={this.props.name}
                       value={this.state.moment.format('DD.MM.YYYY HH:mm')}
                       readOnly
                />
                <input className="WidgetDatePicker__input"
                       type="hidden"
                       name={this.props.name}
                       value={this.state.moment.format()}
                />
            </div>
            <div className="WidgetDatePicker__moment" id="moment" onFocus={this.handleFocus}>
                <InputMoment moment={this.state.moment}
                             onChange={this.handleChange}
                             prevMonthIcon="arrow arrow_left"
                             nextMonthIcon="arrow arrow_right"/>
            </div>
        </div>
}
