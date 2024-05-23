"use strict";

/**
 * volunteer-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::volunteer-page.volunteer-page", {
  config: {
    find: {
      middlewares: ["api::volunteer-page.volunteer-page-populate"],
    },
  },
});
