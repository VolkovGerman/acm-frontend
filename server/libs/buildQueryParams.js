const queryString = require('query-string');

module.exports = function(req, allowedParams = [], customParams = {}) {
    let params = customParams;

    allowedParams.map(param => {
        if (req.query[param]) {
            params[param] = req.query[param];
        }
    });

    const queryStr = queryString.stringify(params);

    return queryStr ? `?${queryStr}` : '';
};
