import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import config from '../../../../core/config/general.config';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import {hashHistory} from 'react-router';

class TopicCreate extends React.Component {
    handleForm = (e) => {
        let formItems = {};
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            if (e.currentTarget.elements[i].name) {
                formItems[e.currentTarget.elements[i].name] = e.currentTarget.elements[i].value !== 'on'
                    ? e.currentTarget.elements[i].value
                    : e.currentTarget.elements[i].checked;
            }
        }
        fetch(`${config.server}/topics`, {
            method: 'post',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nameRU: formItems.nameRU,
                nameEN: formItems.nameEN
            })
        })
            .then(_ => _.json())
            .then(_ => {
                hashHistory.push('/db/topics');
            });

        e.preventDefault();
    };

    componentDidMount = () => {
        this.props.updateBlockTitle('Добавление тематики новостей');
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="TopicCreate">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Основная информация">
                            <WidgetRow title="Название (рус.)" name="nameRU">
                                <WidgetInput name="nameRU"/>
                            </WidgetRow>
                            <WidgetRow title="Название (анг.)" name="nameEN" isRequired>
                                <WidgetInput name="nameEN"/>
                            </WidgetRow>
                        </Block>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="Loader"></div>
            );
        }
    }
}

export default TopicCreate;
