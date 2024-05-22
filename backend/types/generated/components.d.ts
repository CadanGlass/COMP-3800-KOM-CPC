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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cpc-contact-data': BlocksCpcContactData;
      'blocks.title-description-image': BlocksTitleDescriptionImage;
      'blocks.title-description': BlocksTitleDescription;
      'blocks.volunteer-card': BlocksVolunteerCard;
    }
  }
}
