const request = require('request');

const config = require('../config/source');

module.exports = {

    index(req, res, next) {
        res.send('This is the root of acm.bsuir.by API.');
    },

    news(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/news`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            const news = body['_embedded']['news'];
            const newsResponse = news.map((newsItem) => {
                return {
                    id: newsItem.id,
                    title: {ru: newsItem.titleRU, en: newsItem.titleEN},
                    content: {ru: newsItem.contentRU, en: newsItem.contentEN},
                    description: {ru: newsItem.descriptionRU, en: newsItem.descriptionEN},
                    systemName: newsItem.systemName,
                    views: newsItem.views,
                    status: {ru: newsItem.statusRU, en: newsItem.statusEN},
                    createdAt: newsItem.createdAt,
                    lastModifiedAt: newsItem.lastModifiedAt
                }
            });

            res.json(newsResponse);
        });
    },

    events(req, res, next) {
        request({
            method: 'GET',
            uri: `${config.baseUrl}/events?size=${req.query.size}`,
            json: true
        }, (err, status, body) => {
            if (err) { return next(err); }

            const events = body['_embedded']['events'];
            const eventsResponse = events.map((event) => {
                return {
                    id: event.id,
                    title: {ru: event.titleRU, en: event.titleEN},
                    description: {ru: event.descriptionRU, en: event.descriptionEN},
                    place: {ru: event.placeRU, en: event.placeEN},
                    status: {ru: event.statusRU, en: event.statusEN},
                    date: event.date,
                    createdAt: event.createdAt,
                    lastModifiedAt: event.lastModifiedAt
                }
            });

            res.json(eventsResponse);
        });
    }

};
