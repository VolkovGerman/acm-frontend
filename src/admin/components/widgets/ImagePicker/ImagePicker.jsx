import React from 'react';
import Dropzone from 'react-dropzone'

import config from '../../../../core/config/general.config';
import bgDropZone from '../../../../../static/images/svg/frame-landscape.svg';

import './ImagePicker.scss';

export default class ImagePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

    }

    static defaultProps = {
        value: ''
    };

    onDrop(files) {
        let formData = new FormData();
        formData.append('file', files[0]);
        fetch(`${config.server}/api/images/news/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    value: json.location
                })
            })
    }

    handleFlushImage = (e) => {
        this.setState({
            value: ''
        });
        e.preventDefault();
    };

    render() {
        const style = {
            width: '100%',
            border: '1px solid #EDEDED',
            background: `url(${bgDropZone}) center no-repeat`,
            backgroundSize: '50px',
            padding: 0,
            margin: 0
        };

        let dropzoneRef;

        return (
            <div className="ImagePicker">
                <input type="hidden" name={this.props.name} defaultValue={this.state.value}/>
                <div className="ImagePicker__pick">
                    <button className="ImagePicker__btn" type="button" onClick={() => {
                        dropzoneRef.open()
                    }}>
                        Добавить
                    </button>
                    <button className="ImagePicker__flush" onClick={this.handleFlushImage.bind(this)}/>
                </div>
                <Dropzone ref={(node) => {
                    dropzoneRef = node;
                }} onDrop={this.onDrop.bind(this)} multiple={false} style={style} disableClick={true}>
                    {this.state.value
                        ? <img className="ImagePicker__img" src={this.state.value} alt=""/>
                        : <div className="ImagePicker__gag"/>
                    }
                </Dropzone>
            </div>
        )
    }

}
