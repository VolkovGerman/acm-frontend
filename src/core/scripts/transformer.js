export default class Transformer {

    static translit(originString) {
        let space = '-';
        originString = originString.toLowerCase();
        let transl = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
            'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': space, 'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya',
            ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
            '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
            '(': space, ')': space, '-': space, '\=': space, '+': space, '[': space,
            ']': space, '\\': space, '|': space, '/': space, '.': space, ',': space,
            '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
            '?': space, '<': space, '>': space, '№': space
        };

        let resultString = '';
        let currentSymbol = '';

        for (let i = 0; i < originString.length; i++) {
            if (transl[originString[i]] != undefined) {
                if (currentSymbol != transl[originString[i]] || currentSymbol != space) {
                    resultString += transl[originString[i]];
                    currentSymbol = transl[originString[i]];
                }
            }
            else {
                resultString += originString[i];
                currentSymbol = originString[i];
            }
        }

        return this.trim(resultString);
    }

    static trim(originString) {
        originString = originString.replace(/^-/, '');
        return originString.replace(/-$/, '');
    }

    static textEllipsis(text, maxLength) {
        if(text.length < maxLength) {
            return text;
        }
        return `${text.substr(0, maxLength)}...`;
    }
}
