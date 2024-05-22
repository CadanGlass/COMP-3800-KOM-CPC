import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksActivity extends Schema.Component {
  collectionName: 'components_blocks_activities';
  info: {
    displayName: 'Activity';
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
    whoWeAre: Attribute.Component<'blocks.title-description'>;
    whatWeDo: Attribute.Component<'blocks.title-description'>;
    catchmentArea: Attribute.Component<'blocks.title-description'>;
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
    }
  }
}
