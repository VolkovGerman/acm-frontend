/**
 * @swagger
 * definitions:
 *   Tag:
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: object
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class Tag {

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

};
