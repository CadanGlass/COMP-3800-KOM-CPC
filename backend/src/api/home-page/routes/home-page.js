"use strict";

/**
 * home-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::home-page.home-page", {
  config: {
    find: {
      middlewares: ["api::home-page.home-page-populate"],
    },
  },
});
