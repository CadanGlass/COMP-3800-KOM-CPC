"use strict";

/**
 * contact-us-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::contact-us-page.contact-us-page", {
  config: {
    find: {
      middlewares: ["api::contact-us-page.contact-us-page-populate"],
    },
  },
});
