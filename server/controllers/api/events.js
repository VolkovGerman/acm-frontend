const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const EventModel = require('../../models/Event');

function getPayload(res) {
    return res['_embedded']['events'];
}

module.exports = {

    /**
     * @swagger
     * /events/:
     *   get:
     *     tags:
     *       - Show list of Events
     *     description: Get some events.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: List of acm event models.
     *         schema:
     *           type: array
     *           items:
     *            $ref: '#/definitions/Event'
     */
    getSome(req, res, next) {
        const queryParams = buildQueryParams(req, ['size']);

        request({
            method: 'GET',
            uri: `${config.baseUrl}/events${queryParams}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(getPayload(body).map(EventModel.parseFromBackend));
        });
    },

    /**
     * @swagger
     * /events/{eventId}:
     *   get:
     *     tags:
     *       - Show Event
     *     parameters:
     *       - in: path
     *         name: eventId
     *         required: true
     *         type: integer
     *         minimum: 1
     *         description: The event ID.
     *     description: Get events by ID.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Event model object.
     *         schema:
     *           $ref: '#/definitions/Event'
     */
    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/events/${req.params.id}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }
            
            res.json(EventModel.parseFromBackend(body));
        });
    },

    add(req, res, next) {
        request({
            method: 'POST',
            uri: `${config.baseUrl}/events`,
            json: EventModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(EventModel.parseFromBackend(body));
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/events/${req.params.id}`,
            json: EventModel.prepareToBackend(req.body)
        }, (err, status, body) => {
            if (err) { return next(err); }

            res.json(EventModel.parseFromBackend(body));
        });
    },

    delete(req, res, next) {
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/events/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
