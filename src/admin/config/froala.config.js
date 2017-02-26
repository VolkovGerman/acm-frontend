export default {
    placeholderText: '',
    language: 'ru',
    toolbarButtons: [
        'fullscreen',
        '|',
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'fontFamily',
        'fontSize',
        '|',
        'color',
        // 'emoticons',
        // 'inlineStyle',
        // 'paragraphStyle',
        '|',
        'paragraphFormat',
        'align',
        'formatOL',
        'formatUL',
        'outdent',
        'indent',
        '|',
        'insertLink',
        'insertImage',
        // 'insertVideo',
        // 'insertFile',
        'insertTable',
        '|',
        'quote',
        'insertHR',
        'undo',
        'redo',
        'clearFormatting',
        'selectAll',
        '|',
        'html'],
    // toolbarButtonsMD:
    // toolbarButtonsSM:
    // toolbarButtonsXS:
    fontSizeSelection: true,
    fontSize: ['8', '9', '10', '11', '12', '14', '16', '18', '24', '30', '36', '48', '60', '72', '96'],
    fontSizeDefaultSelection: '16',
    heightMin: 250,
    heightMax: 500,
    tabSpaces: 4,
    linkList: [],
        // {
        //     text: 'ACM',
        //     href: 'https://acm.bsuir.by/new',
        //     target: '_blank'
        // },
    // imageUploadURL: '/img/upload'
    // response {link: 'path/to/image.jpg'},
    imageManagerDeleteMethod: 'DELETE',
    // imageManagerDeleteURL: '/img/remove'
    imageManagerLoadMethod: 'GET',
    // imageManagerLoadURL: '/img/get'
    // response [
    //     {
    //         url: 'http://exmaple.com/images/photo1.jpg',
    //         thumb: "http://exmaple.com/thumbs/photo1.jpg",
    //         tag: 'flower'
    //         name: "Photo 1 Name",
    //         id: 103454285,
    //     }
    //     ]
}