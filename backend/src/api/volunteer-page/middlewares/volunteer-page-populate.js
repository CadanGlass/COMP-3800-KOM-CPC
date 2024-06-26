"use strict";

const populate = {
  PageTitle: { populate: true },
  Hero: {
    populate: {
      Title: { populate: true },
      Banner: { populate: true },
    },
  },
  AboutSection: {
    populate: {
      Banner: { populate: true },
      Description: { populate: true },
    },
  },
  ActivitiesCard: {
    populate: {
      Title: { populate: true },
      Description: { populate: true },
      DropdownData: { populate: true },
    },
  },
  WhyVolunteerCard: {
    populate: {
      Info: { populate: true },
      Subpoint: { populate: true },
      Banner: { populate: true },
    },
  },
  FAQCard: {
    populate: {
      Title: { populate: true },
      Question: { populate: true },
    },
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
