'use strict';

/**
 * about-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-us.about-us', {

    // add the populate middleware to the find and findOne actions
    config: {
        find: {
            middlewares: ['api::about-us.about-page-populate'],
        },

        findOne: {
            middlewares: ['api::about-us.about-page-populate'],
        },
    },

});
