import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import config from '../../../../core/config/general.config';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import {hashHistory} from 'react-router';

class TagsCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            currentItem: {},
            numberOfComponents: this.props.location.query.id ? 2 : 1,
            buttons: [
            {
                name: 'Добавить',
                type: 'submit',
                style: 'green'
            }
        ]
        }
    }

    handleForm = (e) => {
        let formItems = {};
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            if (e.currentTarget.elements[i].name) {
                formItems[e.currentTarget.elements[i].name] = e.currentTarget.elements[i].value !== 'on'
                    ? e.currentTarget.elements[i].value
                    : e.currentTarget.elements[i].checked;
            }
        }
        let method = this.state.currentId ? 'put' : 'post';
        let link = `${config.server}/tags/${this.state.currentId ? this.state.currentId : ''}`;
        fetch(link, {
            method: method,
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
                hashHistory.push('/db/tags');
            });

        e.preventDefault();
    };

    componentDidMount = () => {
        this.props.updateBlockTitle(this.state.currentId ? 'Изменение тега' : 'Добавление тега');
        this.props.updateLoadedStatus(true, this.state.numberOfComponents);
        if (this.state.currentId) {
            fetch(`${config.server}/tags/${this.state.currentId}`, {
                method: 'get',
            })
                .then(_ => _.json())
                .then(tag => {
                    this.setState({
                        currentItem: tag,
                    });
                    this.props.updateLoadedStatus(true, this.state.numberOfComponents);
                });
        }
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="TagsCreate">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Основная информация" showButtons buttons={this.state.buttons}>
                            <WidgetRow title="Название (рус.)" name="nameRU">
                                <WidgetInput name="nameRU" value={this.state.currentItem.nameRU}/>
                            </WidgetRow>
                            <WidgetRow title="Название (анг.)" name="nameEN" isRequired>
                                <WidgetInput name="nameEN" value={this.state.currentItem.nameEN}/>
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

export default TagsCreate;
