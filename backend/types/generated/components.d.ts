import type { Schema, Attribute } from '@strapi/strapi';

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

export interface BlocksIconTitleDescription extends Schema.Component {
  collectionName: 'components_blocks_icon_title_descriptions';
  info: {
    displayName: 'Icon Title Description';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlocksTitleDescriptionImage extends Schema.Component {
  collectionName: 'components_blocks_title_description_images';
  info: {
    displayName: 'Title Description Image';
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
  };
  attributes: {
    url: Attribute.String;
    logo: Attribute.Media;
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
    title: Attribute.String;
    intro: Attribute.Text;
    mapUrl: Attribute.String;
    subpoint1: Attribute.Component<'blocks.icon-title-description'>;
    subPoint2: Attribute.Component<'blocks.icon-title-description'>;
    subpoint3: Attribute.Component<'blocks.icon-title-description'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cpc-contact-data': BlocksCpcContactData;
      'blocks.icon-title-description': BlocksIconTitleDescription;
      'blocks.title-description-image': BlocksTitleDescriptionImage;
      'blocks.title-description': BlocksTitleDescription;
      'blocks.url-logo': BlocksUrlLogo;
      'blocks.volunteer-card': BlocksVolunteerCard;
      'home-page.who-we-are-section': HomePageWhoWeAreSection;
    }
  }
}
