import React, {Component} from 'react';

require('./Block.scss');

class Block extends Component {
    render() {
        return (
            <div className="Block">
                <div className="block">
                    <div className="block__title">{this.props.block.title}</div>
                    <div className="block__widgets">{this.props.block.widgets}</div>
                </div>
            </div>
        )
    }
}

export default Block;
