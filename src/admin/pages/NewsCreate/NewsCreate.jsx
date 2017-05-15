import React from 'react';

import Block from '../../components/layouts/Block/Block';
import WidgetRow from '../../components/layouts/WidgetRow/WidgetRow';
import Tabs from '../../components/layouts/Tabs/Tabs';
import Tab from '../../components/layouts/Tab/Tab';
import Input from '../../components/widgets/Input/Input';
import Switch from '../../components/widgets/Switch/Switch';
import HtmlEditor from '../../components/widgets/HtmlEditor/HtmlEditor';
import ImagePicker from '../../components/widgets/ImagePicker/ImagePicker';
import Select from '../../components/widgets/Select/Select';
import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../libs/parse';

export default class NewsCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            currentItem: {},
            buttons: [
                {
                    name: 'Добавить',
                    type: 'submit',
                    style: 'green'
                }
            ]
        };
    }

    handleForm(e) {
        const form = e.currentTarget;
        e.preventDefault();

        this.state.currentId
            ? this.props.handlePutNews(this.state.currentId, parse.parseForm(form))
            : this.props.handlePostNews(parse.parseForm(form));
    }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение новости' : 'Добавление новости');
        this.state.currentId ? this.props.handleLoadingCurrentNews(this.state.currentId) : this.props.flushNews();
        !this.props.themes.data.length ? this.props.handleLoadingThemes() : null;
        !this.props.tags.data.length ? this.props.handleLoadingTags() : null;
    }

    render() {
        return (
            <div className="NewsCreate">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Основная информация" showButtons buttons={this.state.buttons}>
                        {!this.props.news.isLoading && !this.props.themes.isLoading && !this.props.tags.isLoading
                            ?
                            <Tabs>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Тема" name="newsTopic" isRequired>
                                        <Select options={this.props.themes.data} name="newsTopic" withEmpty
                                                isRequired
                                                value={this.props.news.data.topic ? this.props.news.data.topic.id : 0}/>
                                    </WidgetRow>
                                    <WidgetRow title="Название новости" name="titleRU" isRequired>
                                        <Input name="titleRU"
                                               value={this.props.news.data.title ? this.props.news.data.title.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Изоображение" name="image" isRequired>
                                        <ImagePicker name="img"
                                                     value={this.props.news.data.img ? this.props.news.data.img : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Краткое описание" name="descriptionRU">
                                        <HtmlEditor name="descriptionRU"
                                                    value={this.props.news.data.description ? this.props.news.data.description.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentRU">
                                        <HtmlEditor name="contentRU"
                                                    value={this.props.news.data.content ? this.props.news.data.content.ru : ''}/>
                                    </WidgetRow>
                                    {/*<WidgetRow title="Теги" name="news_tags">*/}
                                    {/*<Chosen name="news_tags" allTags={this.props.tags.data}/>*/}
                                    {/*</WidgetRow>*/}
                                    <WidgetRow title="Публиковать" name="statusRU">
                                        <Switch name="statusRU"
                                                value={this.props.news.data.status ? this.props.news.data.status.ru : ''}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название новости" name="titleEN" isRequired>
                                        <Input name="titleEN"
                                               value={this.props.news.data.title ? this.props.news.data.title.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Краткое описание" name="descriptionEN">
                                        <HtmlEditor name="descriptionEN"
                                                    value={this.props.news.data.description ? this.props.news.data.description.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentEN">
                                        <HtmlEditor name="contentEN"
                                                    value={this.props.news.data.content ? this.props.news.data.content.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusEN">
                                        <Switch name="statusEN"
                                                value={this.props.news.data ? this.props.news.data.status.en : ''}/>
                                    </WidgetRow>
                                </Tab>
                            </Tabs>
                            :
                            <Loader/>
                        }
                    </Block>
                </form>
            </div>
        )
    }
}
