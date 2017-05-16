/**
 * @swagger
 * definitions:
 *   Theme:
 *     properties:
 *       id:
 *         type: integer
 *       name:
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
module.exports = class Theme {

    constructor({
        id, name, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
    }

    static parseFromBackend(_) {
        return {
            id: _.id,
            name: {
                ru: _.nameRU,
                en: _.nameEN
            },
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt
        };
    }

    static prepareToBackend(_) {
        return {
            nameRU: _.nameRU,
            nameEN: _.nameEN
        };
    }

};
