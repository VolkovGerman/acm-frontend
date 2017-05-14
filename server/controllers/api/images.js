const config = require('../../config/source');

module.exports = {

    add(req, res, next) {
        res.json({location: `/static/images/${req.file.filename}`})
    },

};
