const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const CompetitionPageModel = require('../../models/CompetitionPage');

function getPayload(res, field) {
    // Refactor this - it may be not an array!
    if (!res) return [];

    return res['_embedded'][field];
}

module.exports = {

    getSome(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/champSections/${req.params.section_id}/pages`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(getPayload(body, 'pages').map(CompetitionPageModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/pages/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionPageModel.parseFromBackend(body));
        });
    },

    add(req, res, next) {
        request({
            method: 'POST',
            uri: `${config.baseUrl}/pages`,
            json: CompetitionPageModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            const page = CompetitionPageModel.parseFromBackend(body);
            request({
                method: 'POST',
                uri: `${config.baseUrl}/champSections/${req.params.section_id}/bind/page`,
                json: {id: page.id}
            }, (err, status, body) => {
                if (err) { return next(err); }

                res.json(page);
            });
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/pages/${req.params.id}`,
            json: CompetitionPageModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionPageModel.parseFromBackend(body));
        });
    },

    delete(req, res, next) {
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/pages/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
