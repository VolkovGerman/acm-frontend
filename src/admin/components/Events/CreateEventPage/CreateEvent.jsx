import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';

class CreateEvent extends React.Component {
    componentDidMount = () => {
        this.props.updateBlockTitle('Добавить событие');
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="CreateChamps">
                    <Block title="Добавить событие">
                        <WidgetRow title="Название" name="news_title" isRequired>
                            <WidgetInput name="news_title"/>
                        </WidgetRow>
                        <WidgetRow title="Url" name="news_url" isRequired>
                            <WidgetInput name="news_url"/>
                        </WidgetRow>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }

}

export default CreateEvent;
