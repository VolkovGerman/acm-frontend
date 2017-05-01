import React from 'react';

import './Tag.scss';

export default class Tag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true,
            id: props.id
        };
    }

    static defaultProps = {
        id: 0,
        callback: null
    };

    toggleActive = (e) => {
        e.preventDefault();

        this.setState(_ => ({
            isActive: !_.isActive
        }));
        this.props.callback(this.props.name, this.state.id);
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
