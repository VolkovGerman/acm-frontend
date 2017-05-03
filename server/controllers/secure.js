const jwt = require('njwt');
const Cookies = require('cookies');
const request = require('request');
const queryString = require('query-string');
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
        const urlParams = queryString.stringify({
            'userName': req.body.username,
            'password': req.body.password
        });
        
        request({
            method: 'GET',
            url: `${config.baseUrl}/users/check?${urlParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return res.json({ status: 'server error' })};

            if (body.success === false) {
                return res.json({
                    status: 'failure',
                    error: 'Wrong credentials.'
                });
            }

            const claims = {
                sub: 'admin',
                iss: 'acm.bsuir.by',
                permissions: 'all'
            };
            const secretKey = config.secret;
            const token = jwt.create(claims, secretKey);

            res.json({
                status: 'success',
                access_token: token.compact(),
                user: {
                    firstName: body.firstName,
                    secondName: body.secondName,
                    fatherName: body.fatherName
                }
            });

        });
    }

}
