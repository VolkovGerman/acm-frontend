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
 *         type: object
 *       createdAt:
 *         type: string
 *       lastModifiedAt:
 *         type: string
 */
module.exports = class Competition {

    constructor({
        id, title, isOpen, year, status, createdAt, lastModifiedAt
    }) {
        this.id = id;
        this.title = title;
        this.isOpen = isOpen;
        this.year = year;
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
            isOpen: _.isOpen,
            status: {
                ru: _.statusRU,
                en: _.statusEN
            },
            year: _.year,
            createdAt: _.createdAt,
            lastModifiedAt: _.lastModifiedAt,
            sections: []
        };
    }

};
