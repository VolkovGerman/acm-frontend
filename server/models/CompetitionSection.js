/**
 * @swagger
 * definitions:
 *   CompetitionSections:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: object
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class CompetitionSection {

    constructor({
        id, title, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
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
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt
        };
    }

    static prepareToBackend(_) {
        return {
            titleRU: _.titleRU,
            titleEN: _.titleEN
        };
    }

};
