import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    render() {
        
        let test = (
            <WidgetInput />
        );
        
        return (
            <div className="NewsCreate">
                <Block block={{title: 'Основная информация', widgets: test}} />
            </div>
        )
    }
}

export default NewsCreate;
