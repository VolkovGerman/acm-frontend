import React from 'react';

import WidgetInput from '../WidgetInputComponent/WidgetInput';
import WidgetTag from '../WidgetTag/WidgetTag';

require('./WidgetChosen.scss');

const ENTER = 13;
const DEFAULT_ID = 0;

class WidgetChosen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
                {
                    id: 1,
                    name: 'Старый тег'
                },
                {
                    id: 2,
                    name: 'Новый тег'
                }
            ]
        };

        this.addTagInput = null;
        this.chosenInput = null;
        this.selectorInput = null;
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    addFocusOnAddTagInput = (e) => {
        e.preventDefault();
        this.addTagInput.focus();
        this.selectorInput.click();
    };

    addTag = (e) => {
        if (e.charCode == ENTER && e.target.value != '') {
            let tags = this.state.tags;
            tags.push({
                id: DEFAULT_ID,
                name: e.target.value
            });
            this.setState({
                tags: tags
            });
            e.target.value = '';
        }
    };

    addTagFromSelect = (e) => {
        if (e.target.value != DEFAULT_ID) {
            let tags = this.state.tags;
            tags.push({
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            });
            this.setState({
                tags: tags
            });
            e.target.options[e.target.selectedIndex].remove();
        }
    };

    deleteTag = (name, id = DEFAULT_ID) => {
        this.setState({
            tags: this.state.tags.filter(_ => _.id != id && _.name != name)
        });
    };

    componentWillUpdate = (nextProps, nextState) => {
        this.chosenInput = JSON.stringify(nextState.tags);
    };

    render = () =>
        <div className="WidgetChosen widgetChosen clearfix" onClick={this.addFocusOnAddTagInput}>
            <input type="hidden" name={this.props.name} ref={_ => this.chosenInput = _}/>
            <div className="widgetChosen__tags">
                {this.state.tags.map((tag, index) =>
                    <div className="widgetChosen__tag" key={index}>
                        <WidgetTag name={tag.name} id={tag.id} callback={this.deleteTag}/>
                    </div>
                )}
                <div className="widgetChosen__addTag">
                    <input className="widgetChosen__addTagInput" type="text" placeholder="+Тег"
                           onKeyPress={this.addTag} ref={_ => this.addTagInput = _}/>
                </div>
            </div>
            <select className="widgetChosen__selector" ref={_ => this.selectorInput = _}
                    onChange={this.addTagFromSelect}>
                <option value="0">Выбор тега</option>
                <option value="2">sadasdsad</option>
                <option value="3">sadasdsad</option>
                <option value="4">sadasdsad</option>
            </select>
        </div>
}

export default WidgetChosen;
