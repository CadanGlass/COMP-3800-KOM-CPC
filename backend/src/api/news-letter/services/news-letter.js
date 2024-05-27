'use strict';

/**
 * news-letter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-letter.news-letter');
