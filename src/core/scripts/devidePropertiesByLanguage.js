export default function devideProperties(data) {

    let items = [];
    let result = [];
    let languages = [
        'RU',
        'EN'
    ];

    if (!Array.isArray(data)) {
        items[0] = data;
    } else {
        items = data;
    }

    items.forEach(function(item, itemIndex) {
        result[itemIndex] = {};
        for (let key in item) {
            let isSingleProperty = true;
            languages.forEach(function(lang, langIndex) {
                if (key.indexOf(lang) !== -1) {
                    let newKey = key.replace(lang, '');
                    if (!result[itemIndex][newKey]) {
                        result[itemIndex][newKey] = [];
                    }
                    result[itemIndex][newKey][langIndex] = item[key];
                    isSingleProperty = false;
                }
            });
            if (isSingleProperty) {
                result[itemIndex][key] = item[key];
            }
        }
    });

    return result;
}

