const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const CompetitionModel = require('../../models/Competition');

function getPayload(res, field) {
    // Refactor this - it may be not an array!
    if (!res) return [];

    return res['_embedded'][field];
}

module.exports = {

    getSome(req, res, next) {
        const queryParams = buildQueryParams(req);

        request({
            method: 'GET',
            uri: `${config.baseUrl}/champs${queryParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(getPayload(body, 'champs').map(CompetitionModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/champs/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionModel.parseFromBackend(body));
        });
    },

    add(req, res, next) {
        request({
            method: 'POST',
            uri: `${config.baseUrl}/champs`,
            json: CompetitionModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionModel.parseFromBackend(body));
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/champs/${req.params.id}`,
            json: CompetitionModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionModel.parseFromBackend(body));
        });
    },

    delete(req, res, next) {
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/champs/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
