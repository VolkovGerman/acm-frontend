import React from 'react';
require('font-awesome/css/font-awesome.css');

import config from './config';
import './HtmlEditor.scss'
import TinyMCE from 'react-tinymce';

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

    handleEditorChange = (e) => {
    };

    render() {
        return (
            <div className="WidgetHtmlEditor">
                <input type="hidden" name={this.props.name} value={this.state.model}/>
                <TinyMCE
                    config={config}
                    onChange={this.handleEditorChange}/>
            </div>
        )
    }
}
