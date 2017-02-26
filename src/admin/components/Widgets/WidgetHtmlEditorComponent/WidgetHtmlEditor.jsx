import React, {Component} from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
require("froala-editor/js/froala_editor.pkgd.min.js");
require("froala-editor/css/froala_editor.pkgd.min.css");
require('font-awesome/css/font-awesome.css');
require('froala-editor/js/languages/ru.js');

import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';

import config from '../../../config/froala.config';
require('./WidgetHtmlEditor.scss');

class WidgetHtmlEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: ''
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }


    handleModelChange(model) {
        console.log(model);
        this.setState({
            model: model
        });
    }

    render() {
        return (
            <div className="WidgetHtmlEditor">
                <FroalaEditor tag='textarea'
                              config={config}
                              model={this.state.model}
                              onModelChange={this.handleModelChange}/>
            </div>
        )
    }
}

export default WidgetHtmlEditor;
