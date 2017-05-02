const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const ThemeModel = require('../../models/Theme');

function getPayload(res) {
    return res['_embedded']['topics'];
}

module.exports = {
    /**
     * @swagger
     * /news/:
     *   get:
     *     tags:
     *       - Themes
     *     description: Get some themes.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Some themes.
     *         schema:
     *           $ref: '#/definitions/Theme'
     */
    getSome(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/topics`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(ThemeModel.parseFromBackend));
        });
    },

    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/topics/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(ThemeModel.parseFromBackend(body));
        });
    },

    add(req, res, next) {
        request({
            method: 'POST',
            uri: `${config.baseUrl}/topics`,
            json: ThemeModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(ThemeModel.parseFromBackend(body));
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/topics/${req.params.id}`,
            json: ThemeModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(ThemeModel.parseFromBackend(body));
        });
    },

    delete(req, res, next) {
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/topics/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
