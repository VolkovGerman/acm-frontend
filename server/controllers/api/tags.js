const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const TagModel = require('../../models/Tag');

function getPayload(res) {
    return res['_embedded']['tags'];
}

module.exports = {
    /**
     * @swagger
     * /tags/:
     *   get:
     *     tags:
     *       - Show list of Tags
     *     description: Get some tags.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Some tags.
     *         schema:
     *           type: array
     *           items:
     *            $ref: '#/definitions/Tag'
     */
    getSome(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/tags`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(TagModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/tags/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(TagModel.parseFromBackend(body));
        });
    },

    add(req, res, next) {
        request({
            method: 'POST',
            uri: `${config.baseUrl}/tags`,
            json: TagModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(TagModel.parseFromBackend(body));
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/tags/${req.params.id}`,
            json: TagModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(TagModel.parseFromBackend(body));
        });
    },

    delete(req, res, next) {
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/tags/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
