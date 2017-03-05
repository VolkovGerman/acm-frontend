import React from 'react';
import {connect} from 'react-redux';

import InputWidget from '../InputWidget/InputWidget';

require('./SelectWidget.scss');

class SelectWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addingIsOpen: false
        };

        this.toggleAdding = this.toggleAdding.bind(this);
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        withEmpty: React.PropTypes.bool,
        withAdding: React.PropTypes.bool
    };

    static defaultProps = {
        options: [],
        withEmpty: false,
        withAdding: false,
    };

    toggleAdding = (e) => {
        e.preventDefault();

        this.setState(_ => ({
            addingIsOpen: !_.addingIsOpen
        }));
    };

    render = () => (
        <div className="SelectWidget">
            <div className="selectWidget">
                <div className="selectWidget__selection selectWidget__general">
                    <select className="selectWidget__select" name={this.props.name}>
                        {this.props.withEmpty === true &&
                        <option value="0">{this.props.lang.choose}</option>
                        }
                        {this.props.options.map((item, index) =>
                            <option key={index} value={item.value}>{item.name}</option>
                        )}
                    </select>
                </div>
                {this.props.withAdding &&
                <div className="selectWidget__selection selectWidget__adding adding">
                    <a className="adding__link" href="#"
                       onClick={_ => this.toggleAdding(_)}>
                        {this.state.addingIsOpen ? '-' : '+'} {this.props.lang.other}
                    </a>
                    {this.state.addingIsOpen &&
                    <div className="adding__input">
                        <InputWidget name={`${this.props.name}_new`}/>
                    </div>
                    }
                </div>
                }
            </div>
        </div>
    );
}

export default connect(
    state => ({
        lang: state.lang
    })
)(SelectWidget);
