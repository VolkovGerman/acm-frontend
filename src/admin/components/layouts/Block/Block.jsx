import React from 'react';

import DefaultButton from '../../buttons/DefaultButton/DefaultButton';

import './Block.scss';

export default class Block extends React.Component {
    static propTypes = {
        showButtons: React.PropTypes.bool,
        buttons: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string,
                type: React.PropTypes.oneOf(['submit', 'link', 'callback']),
                style: React.PropTypes.oneOf(['green'])
            })
        )
    };

    static defaultProps = {
        showButtons: true,
        buttons: []
    };

    render() {
        return (
            <div className="Block">
                <div className="block">
                    <div className="block__title">{this.props.title}</div>
                    <div className="block__widgets">{this.props.children}</div>
                    {this.props.showButtons &&
                    <div className="block__buttons">
                        {this.props.buttons.map((item, index) =>
                            <DefaultButton action={item.action} name={item.name} type={item.type} style={item.style}
                                           key={index}/>
                        )}
                    </div>
                    }
                </div>
            </div>
        )
    }
}
