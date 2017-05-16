const request = require('request');

const config = require('../../config/source');
const buildQueryParams = require('../../libs/buildQueryParams');

const NewsModel = require('../../models/News');
const ThemeModel = require('../../models/Theme');

function getPayload(res) {
    return res['_embedded']['news'];
}

module.exports = {
    /**
     * @swagger
     * /news/:
     *   get:
     *     tags:
     *       - Show list of News
     *     description: Get some news.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Some acm news.
     *         schema:
     *           type: array
     *           items:
      *            $ref: '#/definitions/News'
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

    /**
     * @swagger
     * /news/{newsId}:
     *   get:
     *     tags:
     *       - Show News
     *     parameters:
     *       - in: path
     *         name: newsId
     *         required: true
     *         type: integer
     *         minimum: 1
     *         description: The news ID.
     *     description: Get news by ID.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: One acm news.
     *         schema:
     *           $ref: '#/definitions/News'
     */
    getOne(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/news/${req.params.id}`,
            json: true
        }, (err, status, bodyNews) => {
            if (err) { return next(err); }

            let news = NewsModel.parseFromBackend(bodyNews);

            request({
                method: 'GET',
                uri: `${config.baseUrl}/news/${news.id}/topic`,
                json: true
            }, (err, status, bodyTheme) => {
                if (err) { return next(err); }

                news.topic = ThemeModel.parseFromBackend(bodyTheme);

                res.json(news);
            });
        });
    },

    add(req, res, next) {
        request({
            method: 'POST',
            uri: `${config.baseUrl}/news`,
            json: NewsModel.prepareToBackend(req.body)
        }, (err, status, bodyNews) => {
            if (err) { return next(err); }

            let news = NewsModel.parseFromBackend(bodyNews);

            request({
                method: 'POST',
                uri: `${config.baseUrl}/news/${news.id}/bind/topic`,
                json: {id: req.body.newsTopic}
            }, (err, status, bodyTheme) => {
                if (err) { return next(err); }

                news.topic = ThemeModel.parseFromBackend(bodyTheme);

                res.json(news);
            });
        });
    },

    update(req, res, next) {
        request({
            method: 'PUT',
            uri: `${config.baseUrl}/news/${req.params.id}`,
            json: NewsModel.prepareToBackend(req.body)
        }, (err, status, bodyNews) => {
            if (err) { return next(err); }

            let news = NewsModel.parseFromBackend(bodyNews);

            request({
                method: 'POST',
                uri: `${config.baseUrl}/news/${news.id}/bind/topic`,
                json: {id: req.body.newsTopic}
            }, (err, status, bodyTheme) => {
                if (err) { return next(err); }

                news.topic = ThemeModel.parseFromBackend(bodyTheme);

                res.json(news);
            });
        });
    },

    delete(req, res, next) {
        console.log(req.body);
        request({
            method: 'DELETE',
            uri: `${config.baseUrl}/news/delete`,
            json: req.body
        }, (err, status, body) => {
            if (err) { return next(err); }
            console.log(body);
            res.json(body);
        });
    }

};
