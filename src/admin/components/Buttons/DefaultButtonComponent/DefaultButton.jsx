import React, {Component} from 'react';
import {Link} from 'react-router';

require('./DefaultButton.scss');

class DefaultButton extends Component {

    static propTypes = {
        type: React.PropTypes.oneOf([
            'default',
            'submit'
        ])
    };

    static defaultProps = {
        type: 'default',
        value: 'Добавить'
    };

    render() {
        return (
            <div className="DefaultButton defaultButton">
                {this.props.externalLinks.length
                    ?
                    this.props.externalLinks.map(({link, name}, index) =>
                        <Link to={link} key={index}
                              className={`defaultButton__button defaultButton__button_${this.props.type}`}>
                            {name}
                        </Link>
                    )
                    :
                    <button className={`defaultButton__button defaultButton__button_${this.props.type}`}
                            type={this.props.type}>
                        {this.props.value}
                    </button>
                }
            </div>
        )
    }
}

export default DefaultButton;
