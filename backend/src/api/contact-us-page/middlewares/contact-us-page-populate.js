"use strict";

const populate = {
  Header: {
    populate: {
      HeaderInfo: { populate: { Image: { populate: true } } },
      FirstButton: { populate: true },
      SecondButton: { populate: true },
    },
  },
  EmergencyInfoCard: { populate: true },
  ContactInfo: { populate: true },
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
