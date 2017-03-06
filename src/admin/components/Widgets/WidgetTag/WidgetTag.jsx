import React from 'react';

require('./WidgetTag.scss');

class WidgetTag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        };
    }

    toggleActive = (e) => {
        e.preventDefault();

        this.setState(_ => ({
            isActive: !_.isActive
        }));
    };

    render = () => {
        if (this.state.isActive) {
            return (
                <div className="WidgetTag">
                    <div className="tag">
                        <span className="tag__value">{this.props.name}</span>
                        <a href="#" className="tag__remove" onClick={_ => this.toggleActive(_)}></a>
                    </div>
                </div>
            )
        }
        return <div></div>
    }
}

export default WidgetTag;
