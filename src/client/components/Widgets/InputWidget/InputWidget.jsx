import React from 'react';

require('./InputWidget.scss');

class InputWidget extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string
    };

    static defaultProps = {
        type: 'text',
        placeholder: '',
    };

    render = () => (
        <div className="InputWidget">
            <div className="inputWidget">
                <input className="inputWidget__input"
                       id={this.props.name}
                       name={this.props.name}
                       type={this.props.type}
                       placeholder={this.props.placeholder}/>
            </div>
        </div>
    );
}

export default InputWidget;
