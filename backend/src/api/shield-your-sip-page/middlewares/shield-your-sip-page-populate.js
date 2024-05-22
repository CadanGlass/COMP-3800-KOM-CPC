"use strict";

const populate = {
  Logo: { populate: true },
  Header: {
    populate: {
      HeaderInfo: { populate: { Image: { populate: true } } },
      GetYourShieldButton: { populate: true },
      VPDResourcesButton: { populate: true },
    },
  },
  SubHeading: {
    populate: {
      WhatIsSys: { populate: true },
      SysTeam: { populate: true },
      SysSurvey: { populate: true },
    },
  },
  SysFaqCard: {
    populate: {
      QuestionAnswer: { populate: true },
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
