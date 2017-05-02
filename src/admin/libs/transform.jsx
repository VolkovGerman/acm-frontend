import config from '../config';

export default {
    convertStatusToCountryFlag: (status) =>
        `<div class="flagged">
            ${status.ru == config.statuses.publish ? '<div class="flagged__item ru"></div>' : ''}
            ${status.en == config.statuses.publish ? '<div class="flagged__item en"></div>' : ''}
        </div>`
}
