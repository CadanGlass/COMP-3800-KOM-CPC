"use strict";

const populate = {
  BannerImage: { populate: true },
  Introduction: {
    populate: {
      Title: { populate: true },
      Intro: { populate: true },
      MapUrl: { populate: true },
      WhoWeAre: { populate: true },
      WhatWeDo: { populate: true },
      CatchmentArea: { populate: true },
    },
  },
  Sponsors: {
    populate: {
      Url: { populate: true },
      Logo: { populate: true },
      Name: { populate: true },
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
