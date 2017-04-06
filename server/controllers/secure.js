const jwt = require('njwt');
const Cookies = require('cookies');
const config = require('../config/source');

module.exports = {
    
    checkCookiesToken(req, res, next) {
        const token = new Cookies(req, res).get('access_token');

        jwt.verify(token, config.secret, (err) => {
            if (err) { return res.redirect('/'); }
            next();
        });
    },

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
    },

    logout(req, res, next) {
        res.clearCookie('access_token');
        res.redirect('/');
    }

}
