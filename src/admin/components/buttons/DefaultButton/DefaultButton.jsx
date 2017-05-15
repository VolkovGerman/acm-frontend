import React from 'react';
import {Link} from 'react-router';

import './DefaultButton.scss';

export default class DefaultButton extends React.Component {

    static propTypes = {
        type: React.PropTypes.oneOf([
            'submit',
            'link',
            'callback'
        ])
    };

    static defaultProps = {
        type: 'submit',
        name: 'Добавить',
        style: ''
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.action();
    };

    render() {
        return (
            <div className="DefaultButton defaultButton">
                {this.props.type == 'link' &&
                <Link to={this.props.action}
                      className={`defaultButton__button defaultButton__button_${this.props.style}`}>
                    {this.props.name}
                </Link>
                }
                {this.props.type == 'callback' &&
                <Link className={`defaultButton__button defaultButton__button_${this.props.style}`}
                      onClick={this.handleClick}>
                    {this.props.name}
                </Link>
                }
                {this.props.type == 'submit' &&
                <button className={`defaultButton__button defaultButton__button_${this.props.style}`}
                        type='submit'>
                    {this.props.name}
                </button>
                }
            </div>
        )
    }
}
