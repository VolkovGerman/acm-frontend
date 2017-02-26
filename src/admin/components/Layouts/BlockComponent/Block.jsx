import React, {Component} from 'react';

import DefaultButton from '../../Buttons/DefaultButtonComponent/DefaultButton';

require('./Block.scss');

class Block extends Component {
    static propTypes = {
        showButtons: React.PropTypes.bool
    };

    static defaultProps = {
        showButtons: true
    };

    render() {
        return (
            <div className="Block">
                <div className="block">
                    <div className="block__title">{this.props.title}</div>
                    <div className="block__widgets">{this.props.children}</div>
                    {this.props.showButtons &&
                    <div className="block__buttons">
                        <DefaultButton type="submit"/>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Block;
