import React from 'react';

import Tag from '../Tag/Tag';

import './Chosen.scss';

const ENTER_CODE = 13;
const DEFAULT_ID = 0;

export default class Chosen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: props.tags,
            allTags: props.allTags,
            tagsForSearch: []
        };

        this.addTagInput = null;
        this.chosenInput = null;
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        tags: React.PropTypes.array,
        allTags: React.PropTypes.array
    };

    static defaultProps = {
        tags: [],
        allTags: []
    };

    addFocusOnAddTagInput = (e) => {
        e.preventDefault();
        this.addTagInput.focus();
        this.typingTag(e);
    };

    typingTag = (e) => {
        let newTagName = e.target.value;
        if (e.charCode == ENTER_CODE && newTagName) {
            if (this.state.tags.every(_ => _.name != newTagName)) {
                let tags = this.state.tags;
                tags.push({
                    id: DEFAULT_ID,
                    name: newTagName
                });
                this.setState(_ => ({
                    tags: tags,
                    allTags: _.allTags,
                    tagsForSearch: _.tagsForSearch,
                }));
                this.addTagInput.value = '';
            }
        } else {
            this.setState(_ => ({
                tags: _.tags,
                allTags: _.allTags,
                tagsForSearch: _.allTags.filter(_ => _.name.toLowerCase().indexOf(newTagName.toLowerCase()) != -1),
            }));
        }
    };

    addTagFromSelect = (e) => {
        let newTagId = e.target.getAttribute('id');
        let newTagName = e.target.innerText;
        if (newTagId != DEFAULT_ID) {
            let tags = this.state.tags;
            if (this.state.tags.every(_ => _.name != newTagName)) {
                tags.push({
                    id: newTagId,
                    name: newTagName
                });
            } else {
                tags = tags.map(_ => {
                    if (_.name == newTagName) {
                        return {
                            id: newTagId,
                            name: newTagName
                        };
                    }
                    return _;
                });
            }
            this.setState(_ => ({
                tags: tags,
                allTags: _.allTags.filter(_ => _.id != newTagId),
                tagsForSearch: [],
            }));
            this.addTagInput.value = '';
        }
    };

    deleteTag = (name, id = DEFAULT_ID) => {
        let allTags = this.state.allTags;
        if (id != DEFAULT_ID) {
            allTags.push({
                id: id,
                name: name
            });
        }
        this.setState(_ => ({
            tags: _.tags.filter(_ => _.name != name),
            allTags: allTags,
            tagsForSearch: _.tagsForSearch,
        }));
    };

    componentWillUpdate = (nextProps, nextState) => {
        this.chosenInput.value = JSON.stringify(nextState.tags);
    };

    render = () =>
        <div className="WidgetChosen widgetChosen clearfix" onClick={this.addFocusOnAddTagInput}>
            <input type="hidden" name={this.props.name} ref={_ => this.chosenInput = _}/>
            <div className="widgetChosen__tags">
                {this.state.tags.map((tag, index) =>
                    <div className="widgetChosen__tag" key={index}>
                        <Tag name={tag.name} id={tag.id} callback={this.deleteTag}/>
                    </div>
                )}
                <div className="widgetChosen__addTag">
                    <input className="widgetChosen__addTagInput" type="text" placeholder="+Тег"
                           onKeyPress={this.typingTag} onChange={this.typingTag} ref={_ => this.addTagInput = _}/>
                </div>
            </div>
            {this.state.tagsForSearch.length != 0 &&
            <div className="widgetChosen__selector selector">
                {this.state.tagsForSearch.map((tag, index) =>
                    <div className="selector__item"
                         key={index}
                         id={tag.id}
                         onClick={this.addTagFromSelect}>{tag.name}</div>
                )}
            </div>
            }
        </div>
}
