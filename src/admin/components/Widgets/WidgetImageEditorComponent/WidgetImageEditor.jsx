// import ReactCoreImageUpload  from 'react-core-image-upload';
import React, {Component} from 'react';

class WidgetImageEditor extends Component {

    handleRes(res) {
        console.log(res);
    }

    render() {
        return (
            <div>
                {/*<ReactCoreImageUpload*/}
                    {/*text="Upload Your Image"*/}
                    {/*class={['pure-button', 'pure-button-primary', 'js-btn-crop']}*/}
                    {/*inputOfFile="files"*/}
                    {/*url="./api/upload.php"*/}
                    {/*imageUploaded={this.handleRes}>*/}
                {/*</ReactCoreImageUpload>*/}
            </div>
        )
    }
}

export default WidgetImageEditor;
