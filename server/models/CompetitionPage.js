const Transformer = require('../libs/transformer');

/**
 * @swagger
 * definitions:
 *   CompetitionPage:
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
 *       systemName:
 *         type: string
 *       content:
 *         type: object
 *         properties:
 *           ru:
 *             type: string
 *           en:
 *             type: string
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class CompetitionSections {

    constructor({
        id, title, systemName, content, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
        this.systemName = systemName;
        this.content = content;
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
            systemName: _.systemName,
            content: {
                ru: _.contentRU,
                en: _.contentEN
            },
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt
        };
    }

    static prepareToBackend(_) {
        return {
            titleRU: _.titleRU,
            titleEN: _.titleEN,
            systemName: Transformer.translit(_.titleEN || _.titleRU),
            contentRU: _.contentRU,
            contentEN: _.contentEN
        };
    }

};
