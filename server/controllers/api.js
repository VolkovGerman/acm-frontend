class Api {

    index(req, res, next) {
        res.send('This is the root of acm.bsuir.by API.');
    }

}

module.exports = new Api();