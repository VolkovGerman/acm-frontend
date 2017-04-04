const jwt = require('njwt');
const Cookies = require('cookies');
const config = require('../config/source');

class Client {

    index(req, res, next) {
        res.render('client');
    }

    login(req, res, next) {
        const creds = {
            username: req.query.username,
            password: req.query.password
        };

        if (creds.username !== config.auth.username || creds.password !== config.auth.password) {
            res.redirect('/#/login');
            return;
        }

        const claims = {
            sub: 'admin',
            iss: 'acm.bsuir.by',
            permissions: 'all'
        };
        const secretKey = config.secret;
        const token = jwt.create(claims, secretKey);

        new Cookies(req, res).set('access_token', token.compact());

        res.redirect('/admin');
    }

    logout(req, res, next) {
        res.clearCookie('access_token');
        res.redirect('/');
    }

}

module.exports = new Client();