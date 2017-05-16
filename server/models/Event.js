/**
 * @swagger
 * definitions:
 *   Event:
 *     properties:
 *       id:
 *         type: integer
 *       title:
 *         type: object
 *         properties:
 *           ru:
 *             type: string
 *           en:
 *             type: string
 *       description:
 *         type: object
 *         properties:
 *           ru:
 *             type: string
 *           en:
 *             type: string
 *       place:
 *         type: object
 *         properties:
 *           ru:
 *             type: string
 *           en:
 *             type: string
 *       date:
 *         type: string
 *       status:
 *         type: object
 *         properties:
 *           ru:
 *             type: boolean
 *           en:
 *             type: boolean
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class Event {

    constructor({
        id, title, description, place, status, date, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.place = place;
        this.status = status;
        this.date = date;
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
    }

    static parseFromBackend(_) {
        return {
            id: _.id,
            title: {
                ru: _.titleRU,
                en: _.titleEN
            },
            description: {
                ru: _.descriptionRU,
                en: _.descriptionEN
            },
            place: {
                ru: _.placeRU,
                en: _.placeEN
            },
            status: {
                ru: _.statusRU,
                en: _.statusEN
            },
            date: _.date,
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt
        };
    }

    static prepareToBackend(_) {
        return {
            titleRU: _.titleRU,
            titleEN: _.titleEN,
            descriptionRU: _.descriptionRU,
            descriptionEN: _.descriptionEN,
            placeRU: _.placeRU,
            placeEN: _.placeEN,
            statusRU: _.statusRU,
            statusEN: _.statusEN,
            date: _.date,
        };
    }

};
