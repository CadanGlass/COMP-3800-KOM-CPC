'use strict';

/**
 * about-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-us.about-us', {

    config: {
        find: {
            middlewares: ['api::about-us.about-page-populate'],
        },

        findOne: {
            middlewares: ['api::about-us.about-page-populate'],
        },
    },

});
