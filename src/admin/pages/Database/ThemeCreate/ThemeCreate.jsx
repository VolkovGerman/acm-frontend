import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetRow from '../../../components/layouts/WidgetRow/WidgetRow';
import Input from '../../../components/widgets/Input/Input';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../../libs/parse';

export default class ThemeCreate extends React.Component {
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
            ? this.props.handlePutTheme(this.state.currentId, parse.parseForm(form))
            : this.props.handlePostTheme(parse.parseForm(form));
    }
    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение темы новости' : 'Добавление темы новости');
        this.state.currentId ? this.props.handleLoadingCurrentTheme(this.state.currentId) : this.props.flushTheme();
    }

    render() {
        return (
            <div className="ThemeCreate">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Основная информация" showButtons buttons={this.state.buttons}>
                        {!this.props.themes.isLoading
                            ?
                            <div>
                                <WidgetRow title="Название (рус.)" name="nameRU">
                                    <Input name="nameRU" value={this.props.themes.current.name ? this.props.themes.current.name.ru : ''}/>
                                </WidgetRow>
                                <WidgetRow title="Название (анг.)" name="nameEN" isRequired>
                                    <Input name="nameEN" value={this.props.themes.current.name ? this.props.themes.current.name.en : ''}/>
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
