import config from '../../../../core/config/general.config';

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
        // 'fontFamily',
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
    paragraphFormat: {
        H1: 'Heading 1',
        H2: 'Heading 2',
        H3: 'Heading 3',
        H4: 'Heading 4',
        N: 'Normal',
    },
    linkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
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
    imageUploadURL: `${config.server}/news/images/upload`,
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
