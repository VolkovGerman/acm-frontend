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

    add() {

    },

    update() {

    }

};
