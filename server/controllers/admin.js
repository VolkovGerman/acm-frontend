class Admin {

    index(req, res, next) {
        res.render('admin');
    }

}

module.exports = new Admin();