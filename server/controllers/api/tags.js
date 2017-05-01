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
     * /news/:
     *   get:
     *     tags:
     *       - Tags
     *     description: Get some tags.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Some tags.
     *         schema:
     *           $ref: '#/definitions/Tag'
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

    add() {

    },

    update() {

    }

};
