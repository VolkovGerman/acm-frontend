class Client {

    index(req, res, next) {
        res.render('client');
    }

}

module.exports = new Client();