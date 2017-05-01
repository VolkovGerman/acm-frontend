const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const NewsModel = require('../../models/News');

function getPayload(res) {
    return res['_embedded']['news'];
}

module.exports = {
    /**
     * @swagger
     * /news/:
     *   get:
     *     tags:
     *       - News
     *     description: Get some news.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Some acm news.
     *         schema:
     *           $ref: '#/definitions/News'
     */
    getSome(req, res, next) {
        const queryParams = buildQueryParams(req, ['size'], { sort: 'lastModifiedAt,desc' });

        request({
            method: 'GET',
            uri: `${config.baseUrl}/news${queryParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(NewsModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/news/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(NewsModel.parseFromBackend));
        });
    },

    add() {

    },

    update() {

    }

};
