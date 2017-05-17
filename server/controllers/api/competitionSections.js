const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const CompetitionSectionModel = require('../../models/CompetitionSection');
const CompetitionPageModel = require('../../models/CompetitionPage');

function getPayload(res, field) {
    // Refactor this - it may be not an array!
    if (!res) return [];

    return res['_embedded'][field];
}

module.exports = {

    getSomeWithPages(req, res, next) {
        let sections = [];
        const queryParams = buildQueryParams(req, [], { sort: 'id,desc' });

        request({
            method: 'GET',
            uri: `${config.baseUrl}/champs/${req.params.competition_id}/sections${queryParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            const promises = [];

            sections = getPayload(body, 'champSections').map(CompetitionSectionModel.parseFromBackend);
            sections.map((section, index) => {

                promises.push(new Promise((resolve, reject) => {
                    request({
                        method: 'GET',
                        uri: `${config.baseUrl}/champSections/${section.id}/pages${queryParams}`,
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

    getSome(req, res, next) {
        const queryParams = buildQueryParams(req, [], { sort: 'id,desc' });

        request({
            method: 'GET',
            uri: `${config.baseUrl}/champs/${req.params.competition_id}/sections${queryParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(getPayload(body, 'champSections').map(CompetitionSectionModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/champSections/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionSectionModel.parseFromBackend(body));
        });
    },

    add(req, res, next) {
        console.log(CompetitionSectionModel.prepareToBackend(req.body));
        request({
            method: 'POST',
            uri: `${config.baseUrl}/champSections`,
            json: CompetitionSectionModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            const section = CompetitionSectionModel.parseFromBackend(body);
            request({
                method: 'POST',
                uri: `${config.baseUrl}/champs/${req.params.competition_id}/bind/champSection`,
                json: {id: section.id}
            }, (err, status, body) => {
                if (err) { return next(err); }

                res.json(section);
            });
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/champSections/${req.params.id}`,
            json: CompetitionSectionModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(CompetitionSectionModel.parseFromBackend(body));
        });
    },

    delete(req, res, next) {
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/champSections/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
