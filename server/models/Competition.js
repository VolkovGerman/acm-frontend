const Transformer = require('../libs/transformer');

/**
 * @swagger
 * definitions:
 *   Competition:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: object
 *       isOpen:
 *         type: boolean
 *       year:
 *         type: number
 *       status:
 *         type: number
 *       systemName:
 *         type: string
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class Competition {

    constructor({
        id, title, isOpen, year, status, systemName, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
        this.isOpen = isOpen;
        this.year = year;
        this.status = status;
        this.systemName = systemName;
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
            isOpen: _.isOpen,
            status: {
                ru: _.status,
                en: _.status
            },
            systemName: _.systemName,
            year: _.year,
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt
        };
    }

    static prepareToBackend(_) {
        return {
            titleRU: _.titleRU,
            titleEN: _.titleEN,
            systemName: `${Transformer.translit(_.titleEN || _.titleRU)}-${_.year}`,
            isOpen: _.isOpen,
            year: _.year,
            status: _.status
        };
    }

};
