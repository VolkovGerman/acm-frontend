// Module private variables
const root = `${__dirname}/../../public/admin/`;
const indexFileName = 'index.html';

module.exports = {

    index(req, res, next) {
        const options = { root };

        res.sendFile(indexFileName, options, function(err) {
            if (err) { return next(err); }
        });
    }

}