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

};
