"use strict";

/**
 * `about-page-populate` middleware
 */

// create a variable to store the data
const populate = {
  OurMission: {
    populate: "*",
  },

  OurStory: {
    populate: "*",
  },

  CatchmentArea: {
    populate: "*",
  },

  OurPartners: {
    populate: "*",
  },

  CPCTitleDescription: {
    populate: "*",
  },

  CPCContactData: {
    populate: "*",
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In about-page-populate middleware.");

    // Add the populate object to the query
    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
