import config from '../../../../core/config/general.config';

export default {
    height: 450,
    branding: false,
    menubar: true,
    browser_spellcheck: true,
    elementpath: false,
    plugins: `textcolor lists link image imagetools table fullscreen preview media codesample help searchreplace`,
    toolbar1: `
    undo redo | 
    cut copy paste searchreplace| 
    insert | 
    styleselect forecolor | 
    bold italic underline| 
    alignleft aligncenter alignright alignjustify | 
    bullist numlist outdent indent | 
    table`,
    toolbar2: `
    link image imageupload media |
    forecolor backcolor | 
    preview fullscreen |
    codesample help`,
    link_list: [
        {title: 'БГУИР', value: 'http://www.bsuir.by'},
        {title: 'ACM БГУИР', value: 'http://www.acm.bsuir.by'}
    ],
    link_title: false,
    body_class: 'htmlEditorArea',
    content_style: '.htmlEditorArea table{width: 100%} .htmlEditorArea table td{border: 1px solid #EDEDED}',
    visual: false,
    image_title: true,
    automatic_uploads: true,
    images_upload_url: `${config.server}/api/images/news/upload`,
    file_picker_types: 'image',
    file_picker_callback: function(cb, value, meta) {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = function() {
            const file = this.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                const id = 'blobid' + (new Date()).getTime();
                const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                const blobInfo = blobCache.create(id, file, reader.result);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
            };
        };
        input.click();
    }
}