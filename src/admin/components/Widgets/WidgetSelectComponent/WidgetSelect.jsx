import React, {Component} from 'react';

import WidgetInput from '../WidgetInputComponent/WidgetInput';

require('./WidgetSelect.scss');

class WidgetSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenAdding: false
        };

        this.toggleOpenAdding = this.toggleOpenAdding.bind(this);
    }

    static propTypes = {
        options: React.PropTypes.array.isRequired,
        withEmpty: React.PropTypes.bool,
        withAdding: React.PropTypes.bool
    };

    static defaultProps = {
        options: [],
        withEmpty: false,
        withAdding: false
    };

    toggleOpenAdding(e) {
        e.preventDefault();

        this.setState(_ => ({
            isOpenAdding: !_.isOpenAdding
        }));
    }

    render() {
        return (
            <div className="WidgetSelect">
                <select className={this.props.withAdding ? 'widgetSelect widgetSelect_adding' : 'widgetSelect'}
                        name={this.props.name} id={this.props.name}>
                    {this.props.withEmpty === true &&
                    <option value="0"></option>
                    }
                    {this.props.options.map((item, index) =>
                        <option key={index} value={item.id}>{item.name}</option>
                    )}
                </select>
                {this.props.withAdding &&
                <div className="adding">
                    {!this.state.isOpenAdding ? (
                            <button className="adding__icon adding__icon_plus" onClick={_ => this.toggleOpenAdding(_)}></button>
                        ) : (
                            <div className="adding__input">
                                <WidgetInput name={`${this.props.name}_new`} />
                                <button className="adding__icon adding__icon_cross" onClick={_ => this.toggleOpenAdding(_)}></button>
                            </div>
                        )
                    }
                </div>
                }
            </div>
        )
    }
}

export default WidgetSelect;
