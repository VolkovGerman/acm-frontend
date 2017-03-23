import React, {Component} from 'react';

import DefaultButton from '../../Buttons/DefaultButtonComponent/DefaultButton';

require('./Block.scss');

class Block extends Component {
    static propTypes = {
        showButtons: React.PropTypes.bool,
        externalLinks: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                link: React.PropTypes.string.isRequired,
                name: React.PropTypes.string.isRequired
            })
        )
    };

    static defaultProps = {
        showButtons: true,
        externalLinks: []
    };

    render() {
        return (
            <div className="Block">
                <div className="block">
                    <div className="block__title">{this.props.title}</div>
                    <div className="block__widgets">{this.props.children}</div>
                    {this.props.showButtons &&
                    <div className="block__buttons">
                        <DefaultButton type="submit" {...this.props}/>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Block;
