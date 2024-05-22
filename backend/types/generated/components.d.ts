import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksActivity extends Schema.Component {
  collectionName: 'components_blocks_activities';
  info: {
    displayName: 'Activity';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Blocks;
    Image: Attribute.Media;
  };
}

export interface BlocksCpcContactData extends Schema.Component {
  collectionName: 'components_blocks_cpc_contact_data';
  info: {
    displayName: 'CPC Contact Data';
  };
  attributes: {
    Name: Attribute.String;
    Phone: Attribute.String;
    Email: Attribute.String;
  };
}

export interface BlocksTitleDescriptionImage extends Schema.Component {
  collectionName: 'components_blocks_title_description_images';
  info: {
    displayName: 'Title Description Image';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface BlocksTitleDescription extends Schema.Component {
  collectionName: 'components_blocks_title_descriptions';
  info: {
    displayName: 'Title Description';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface BlocksUrlLogo extends Schema.Component {
  collectionName: 'components_blocks_url_logos';
  info: {
    displayName: 'URL Logo';
    description: '';
  };
  attributes: {
    Url: Attribute.String;
    Logo: Attribute.Media;
  };
}

export interface BlocksVolunteerCard extends Schema.Component {
  collectionName: 'components_blocks_volunteer_cards';
  info: {
    displayName: 'Volunteer Card';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface HomePageWhoWeAreSection extends Schema.Component {
  collectionName: 'components_home_page_who_we_are_sections';
  info: {
    displayName: 'Who We Are Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Intro: Attribute.Text;
    MapUrl: Attribute.String;
    WhoWeAre: Attribute.Component<'blocks.title-description'>;
    WhatWeDo: Attribute.Component<'blocks.title-description'>;
    CatchmentArea: Attribute.Component<'blocks.title-description'>;
  };
}

export interface ResourcesPageCommunityPolicingCard extends Schema.Component {
  collectionName: 'components_resources_page_community_policing_cards';
  info: {
    displayName: 'Community-Policing-Card';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.String & Attribute.Required;
    Logo: Attribute.Media;
  };
}

export interface ResourcesPageResourcesPage extends Schema.Component {
  collectionName: 'components_resources_page_resources_pages';
  info: {
    displayName: 'Resources-Page';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    communityPolicingCard: Attribute.Component<'resources-page.community-policing-card'>;
    volunteerCard: Attribute.Component<'resources-page.volunteer-card'>;
    whoToCallCard: Attribute.Component<'resources-page.who-to-call-card'>;
  };
}

export interface ResourcesPageVolunteerCard extends Schema.Component {
  collectionName: 'components_resources_page_volunteer_cards';
  info: {
    displayName: 'Volunteer-Card';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.String & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface ResourcesPageWhoToCallCard extends Schema.Component {
  collectionName: 'components_resources_page_who_to_call_cards';
  info: {
    displayName: 'Who-To-Call-Card';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Descirption: Attribute.String & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.activity': BlocksActivity;
      'blocks.cpc-contact-data': BlocksCpcContactData;
      'blocks.title-description-image': BlocksTitleDescriptionImage;
      'blocks.title-description': BlocksTitleDescription;
      'blocks.url-logo': BlocksUrlLogo;
      'blocks.volunteer-card': BlocksVolunteerCard;
      'home-page.who-we-are-section': HomePageWhoWeAreSection;
      'resources-page.community-policing-card': ResourcesPageCommunityPolicingCard;
      'resources-page.resources-page': ResourcesPageResourcesPage;
      'resources-page.volunteer-card': ResourcesPageVolunteerCard;
      'resources-page.who-to-call-card': ResourcesPageWhoToCallCard;
    }
  }
}
