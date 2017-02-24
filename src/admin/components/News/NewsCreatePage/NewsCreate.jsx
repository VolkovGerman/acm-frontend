import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    render() {
        return (
            <div className="NewsCreate">
                <Block block={{title: 'Основная информация'}} />
            </div>
        )
    }
}

export default NewsCreate;
