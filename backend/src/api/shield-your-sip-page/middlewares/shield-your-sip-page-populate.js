"use strict";

const populate = {
  Logo: { populate: true },
  Header: {
    populate: {
      HeaderInfo: { populate: { Image: { populate: true } } },
      FirstButton: { populate: true },
      SecondButton: { populate: true },
    },
  },
  SubHeading: {
    populate: {
      WhatIsSys: { populate: true },
      SysTeam: {
        populate: { Logos: { populate: { Logo: { populate: true } } } },
      },
      SysSurvey: { populate: true },
    },
  },
  SysFaqCard: {
    populate: {
      QuestionAnswer: { populate: true },
    },
  },
  SponsorsAndSupport: {
    populate: {
      Sponsor: { populate: { Logo: { populate: true } } },
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
