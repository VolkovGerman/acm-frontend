import React from 'react';
import TinyMCE from 'react-tinymce';

import 'font-awesome/css/font-awesome.css';
import './ru.lang';
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

    handleModelChange = (e) => {
        this.setState({
            model: e.target.getContent()
        })
    };

    render() {
        return (
            <div className="HtmlEditor">
                <input type="hidden" name={this.props.name} value={this.state.model}/>
                <TinyMCE
                    content={this.state.model}
                    config={config}
                    onChange={this.handleModelChange}/>
            </div>
        )
    }
}
