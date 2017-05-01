/**
 * @swagger
 * definitions:
 *   CompetitionSections:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: object
 *       systemName:
 *         type: string
 *       content:
 *         type: object
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

};
