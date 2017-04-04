const jwt = require('njwt');
const Cookies = require('cookies');
const config = require('../config/source');

class Admin {

    index(req, res, next) {
        res.render('admin');
    }

    secure(req, res, next) {
        const token = new Cookies(req, res).get('access_token');
        jwt.verify(token, config.secret, (err, token) => {
            if (err) {
                res.redirect('/');
                return;
            }

            next();
        });

    }

}

module.exports = new Admin();