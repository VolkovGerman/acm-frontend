const Transformer = require('../libs/transformer');

/**
 * @swagger
 * definitions:
 *   News:
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
 *       img:
 *         type: string
 *       content:
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
 *       systemName:
 *         type: string
 *       views:
 *         type: integer
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
module.exports = class News {

    constructor({
        id, title, img, content, description, systemName, views, status, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.img = img;
        this.description = description;
        this.systemName = systemName;
        this.views = views;
        this.status = status;
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
            img: _.img,
            content: {
                ru: _.contentRU,
                en: _.contentEN
            },
            description: {
                ru: _.descriptionRU,
                en: _.descriptionEN
            },
            systemName: _.systemName,
            views: _.views,
            status: {
                ru: _.statusRU,
                en: _.statusEN
            },
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt
        };
    }

    static prepareToBackend(_) {
        return {
            titleRU: _.titleRU,
            systemName: Transformer.translit(_.titleEN || _.titleRU),
            img: _.img,
            contentRU: _.contentRU,
            descriptionRU: _.descriptionRU,
            statusRU: _.statusRU,
            titleEN: _.titleEN,
            contentEN: _.contentEN,
            descriptionEN: _.descriptionEN,
            statusEN: _.statusEN,
        };
    }

};
