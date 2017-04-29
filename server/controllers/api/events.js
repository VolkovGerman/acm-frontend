const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const EventModel = require('../../models/Event');

function getPayload(res) {
    return res['_embedded']['events'];
}

module.exports = {

    getSome(req, res, next) {
        const queryParams = buildQueryParams(req, ['size']);

        request({
            method: 'GET',
            uri: `${config.baseUrl}/events${queryParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(EventModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/events/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(EventModel.parseFromBackend));
        });
    },

    add() {

    },

    update() {

    }

}
