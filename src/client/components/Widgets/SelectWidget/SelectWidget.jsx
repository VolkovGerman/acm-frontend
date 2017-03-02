import React from 'react';
import {connect} from 'react-redux';

require('./SelectWidget.scss');

class SelectWidget extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        withEmpty: React.PropTypes.bool,
        withAdding: React.PropTypes.bool
    };

    static defaultProps = {
        options: [],
        withEmpty: false,
        withAdding: false
    };

    render = () => (
        <div className="SelectWidget">
            <div className="selectWidget">
                <select className="selectWidget__select" name={this.props.name}>
                    {this.props.withEmpty === true &&
                    <option value="0">{this.props.lang.choose}</option>
                    }
                    {this.props.options.map((item, index) =>
                        <option key={index} value={item.value}>{item.name}</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default connect(
    state => ({
        lang: state.lang
    })
)(SelectWidget);
