const Transformer = require('../libs/transformer');

/**
 * @swagger
 * definitions:
 *   News:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: object
 *       content:
 *         type: object
 *       description:
 *         type: object
 *       systemName:
 *         type: string
 *       views:
 *         type: number
 *       status:
 *         type: object
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class News {

    constructor({
        id, title, content, description, systemName, views, status, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
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
