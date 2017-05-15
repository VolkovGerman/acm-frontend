import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetRow from '../../../components/layouts/WidgetRow/WidgetRow';
import Input from '../../../components/widgets/Input/Input';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../../libs/parse';

export default class TagsCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            buttons: [
                {
                    name: 'Добавить',
                    type: 'submit',
                    style: 'green'
                }
            ]
        }
    }

    handleForm(e) {
        const form = e.currentTarget;
        e.preventDefault();

        this.state.currentId
            ? this.props.handlePutTag(this.state.currentId, parse.parseForm(form))
            : this.props.handlePostTag(parse.parseForm(form));
    }
    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение тега' : 'Добавление тега');
        this.state.currentId ? this.props.handleLoadingCurrentTag(this.state.currentId) : this.props.flushTag();
    }

    render() {
        return (
            <div className="TagsCreate">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Основная информация" showButtons buttons={this.state.buttons}>
                        {!this.props.tags.isLoading
                            ?
                            <div>
                                <WidgetRow title="Название (рус.)" name="nameRU">
                                    <Input name="nameRU" value={this.props.tags.current.name ? this.props.tags.current.name.ru : ''}/>
                                </WidgetRow>
                                <WidgetRow title="Название (анг.)" name="nameEN" isRequired>
                                    <Input name="nameEN" value={this.props.tags.current.name ? this.props.tags.current.name.en : ''}/>
                                </WidgetRow>
                            </div>
                            :
                            <Loader/>
                        }
                    </Block>
                </form>
            </div>
        )
    }
}
