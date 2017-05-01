const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const CompetitionModel = require('../../models/Competition');
const CompetitionSectionsModel = require('../../models/CompetitionSections');

function getPayload(res) {
    return res['_embedded']['champs'];
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

            const promises = [];

            competitions = getPayload(body).map(CompetitionModel.parseFromBackend);
            competitions.map((competition, index) => {

                promises.push(new Promise((resolve, reject) => {
                    request({
                        method: 'GET',
                        uri: `${config.baseUrl}/champs/${competition.id}/sections`,
                        json: true
                    }, (err, status, body) => {
                        if (err) { return next(err); }

                        function getPayload(res) {
                            return res['_embedded']['champSections'];
                        }

                        resolve({
                            index,
                            payload: getPayload(body).map(CompetitionSectionsModel.parseFromBackend)
                        });
                    });
                }));

            });

            Promise.all(promises)
                    .then(sections => {
                        res.json(sections.map(section => {
                            competitions[section.index].sections = section.payload;
                            return competitions[section.index];
                        }));
                    });

        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/champs/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(CompetitionModel.parseFromBackend));
        });
    },

    add() {

    },

    update() {

    }

}
