const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const CompetitionModel = require('../../models/Competition');
const CompetitionSectionModel = require('../../models/CompetitionSection');
const CompetitionPageModel = require('../../models/CompetitionPage');

function getPayload(res, field) {
    // Refactor this - it may be not an array!
    if (!res) return [];

    return res['_embedded'][field];
}

module.exports = {

    getSome(req, res, next) {
        let competitions = [];
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
            
            res.json(getPayload(body, 'champs').map(CompetitionModel.parseFromBackend));
        });
    },

    getSections(req, res, next) {
        let sections = [];

        request({
            method: 'GET',
            uri: `${config.baseUrl}/champs/${req.params.id}/sections`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            const promises = [];

            sections = getPayload(body, 'champSections').map(CompetitionSectionModel.parseFromBackend);
            sections.map((section, index) => {

                promises.push(new Promise((resolve, reject) => {
                    request({
                        method: 'GET',
                        uri: `${config.baseUrl}/champSections/${section.id}/pages`,
                        json: true
                    }, (err, status, body) => {
                        if (err) { return next(err); }

                        resolve({
                            index,
                            payload: getPayload(body, 'pages').map(CompetitionPageModel.parseFromBackend)
                        });
                    });
                }));

            });

            Promise.all(promises)
                .then(pages => {
                    res.json(pages.map(page => {
                        sections[page.index].pages = page.payload;
                        return sections[page.index];
                    }));
                });
        });
    },

    add() {

    },

    update() {

    }

}
