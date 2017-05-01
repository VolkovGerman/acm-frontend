import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
require("froala-editor/js/froala_editor.pkgd.min.js");
require("froala-editor/css/froala_editor.pkgd.min.css");
require('font-awesome/css/font-awesome.css');
require('froala-editor/js/languages/ru.js');

import config from './config';
import './HtmlEditor.scss'

export default class HtmlEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            model: props.value,
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        value: React.PropTypes.string
    };

    static defaultProps = {
        name: '',
        value: ''
    };

    handleModelChange(model) {
        this.setState({
            model: model
        });
    }

    render() {
        return (
            <div className="WidgetHtmlEditor">
                <input type="hidden" name={this.props.name} value={this.state.model}/>
                <FroalaEditor tag='textarea'
                              config={config}
                              model={this.state.model}
                              onModelChange={this.handleModelChange}/>
            </div>
        )
    }
}
