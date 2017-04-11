const request = require('request');

const config = require('../config/source');

module.exports = {

    index(req, res, next) {
        res.send('This is the root of acm.bsuir.by API.');
    },

    news(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/news`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(body['_embedded']['news']);
        });
    },

    events(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/events`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(body['_embedded']['events']);
        });
    }

};
