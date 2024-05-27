import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAccordion extends Schema.Component {
  collectionName: 'components_blocks_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ContactData: Attribute.Component<'blocks.cpc-contact-data', true>;
  };
}

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

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    ButtonLabel: Attribute.String;
    Link: Attribute.String;
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

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_shield_your_sip_page_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    HeaderInfo: Attribute.Component<'blocks.title-description-image'>;
    FirstButton: Attribute.Component<'blocks.button'>;
    SecondButton: Attribute.Component<'blocks.button'>;
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
    displayName: 'Name URL Logo';
    description: '';
  };
  attributes: {
    Url: Attribute.String;
    Logo: Attribute.Media;
    Name: Attribute.String;
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

export interface ContactPageContactInfo extends Schema.Component {
  collectionName: 'components_contact_page_contact_infos';
  info: {
    displayName: 'ContactInfo';
    description: '';
  };
  attributes: {
    Phone: Attribute.String;
    Email: Attribute.Email;
    Address: Attribute.String;
    Hours: Attribute.String;
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

export interface HowCanIHelpPageHelpCard extends Schema.Component {
  collectionName: 'components_how_can_i_help_page_help_cards';
  info: {
    displayName: 'helpCard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface HowCanIHelpPageHowCanIhelpPage extends Schema.Component {
  collectionName: 'components_how_can_i_help_page_how_can_ihelp_pages';
  info: {
    displayName: 'HowCanIhelpPage';
  };
  attributes: {
    helpCard: Attribute.Component<'how-can-i-help-page.help-card'>;
    supportUsCard: Attribute.Component<'how-can-i-help-page.support-us-card'>;
  };
}

export interface HowCanIHelpPageSupportUsCard extends Schema.Component {
  collectionName: 'components_how_can_i_help_page_support_us_cards';
  info: {
    displayName: 'supportUsCard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ProgramPageAccordionContent extends Schema.Component {
  collectionName: 'components_program_page_accordion_contents';
  info: {
    displayName: 'AccordionContent';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Blocks;
  };
}

export interface ProgramPageHero extends Schema.Component {
  collectionName: 'components_program_page_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Description: Attribute.Text;
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

export interface ShieldYourSipPageSubHeading extends Schema.Component {
  collectionName: 'components_shield_your_sip_page_sub_headings';
  info: {
    displayName: 'SubHeading';
  };
  attributes: {
    WhatIsSys: Attribute.Component<'blocks.title-description'>;
    SysTeam: Attribute.Component<'blocks.title-description'>;
    SysSurvey: Attribute.Component<'blocks.title-description'>;
  };
}

export interface ShieldYourSipPageSysFaq extends Schema.Component {
  collectionName: 'components_shield_your_sip_page_sys_faqs';
  info: {
    displayName: 'Sys FAQ';
    description: '';
  };
  attributes: {
    QuestionAnswer: Attribute.Component<'blocks.title-description', true>;
    Title: Attribute.String;
  };
}

export interface VolunteerPageAboutSection extends Schema.Component {
  collectionName: 'components_volunteer_page_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    Banner: Attribute.Media;
    Description: Attribute.Blocks;
  };
}

export interface VolunteerPageActivitiesCard extends Schema.Component {
  collectionName: 'components_volunteer_page_activities_cards';
  info: {
    displayName: 'Activities Card';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    DropdownData: Attribute.Component<'volunteer-page.dropdown-data', true>;
  };
}

export interface VolunteerPageDropdownData extends Schema.Component {
  collectionName: 'components_volunteer_page_dropdown_data';
  info: {
    displayName: 'Title Long Description';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
  };
}

export interface VolunteerPageFaqCard extends Schema.Component {
  collectionName: 'components_volunteer_page_faq_cards';
  info: {
    displayName: 'FAQ Card';
  };
  attributes: {
    Title: Attribute.String;
    Question: Attribute.Component<'volunteer-page.dropdown-data', true>;
  };
}

export interface VolunteerPageHero extends Schema.Component {
  collectionName: 'components_volunteer_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Title: Attribute.String;
    Banner: Attribute.Media;
  };
}

export interface VolunteerPageWhyVolunteerCard extends Schema.Component {
  collectionName: 'components_volunteer_page_why_volunteer_cards';
  info: {
    displayName: 'Why Volunteer Card';
    description: '';
  };
  attributes: {
    Info: Attribute.Component<'volunteer-page.dropdown-data'>;
    Banner: Attribute.Media;
    Subpoint: Attribute.Component<'blocks.title-description', true> &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.accordion': BlocksAccordion;
      'blocks.activity': BlocksActivity;
      'blocks.button': BlocksButton;
      'blocks.cpc-contact-data': BlocksCpcContactData;
      'blocks.header': BlocksHeader;
      'blocks.title-description-image': BlocksTitleDescriptionImage;
      'blocks.title-description': BlocksTitleDescription;
      'blocks.url-logo': BlocksUrlLogo;
      'blocks.volunteer-card': BlocksVolunteerCard;
      'contact-page.contact-info': ContactPageContactInfo;
      'home-page.who-we-are-section': HomePageWhoWeAreSection;
      'how-can-i-help-page.help-card': HowCanIHelpPageHelpCard;
      'how-can-i-help-page.how-can-ihelp-page': HowCanIHelpPageHowCanIhelpPage;
      'how-can-i-help-page.support-us-card': HowCanIHelpPageSupportUsCard;
      'program-page.accordion-content': ProgramPageAccordionContent;
      'program-page.hero': ProgramPageHero;
      'resources-page.community-policing-card': ResourcesPageCommunityPolicingCard;
      'resources-page.resources-page': ResourcesPageResourcesPage;
      'resources-page.volunteer-card': ResourcesPageVolunteerCard;
      'resources-page.who-to-call-card': ResourcesPageWhoToCallCard;
      'shield-your-sip-page.sub-heading': ShieldYourSipPageSubHeading;
      'shield-your-sip-page.sys-faq': ShieldYourSipPageSysFaq;
      'volunteer-page.about-section': VolunteerPageAboutSection;
      'volunteer-page.activities-card': VolunteerPageActivitiesCard;
      'volunteer-page.dropdown-data': VolunteerPageDropdownData;
      'volunteer-page.faq-card': VolunteerPageFaqCard;
      'volunteer-page.hero': VolunteerPageHero;
      'volunteer-page.why-volunteer-card': VolunteerPageWhyVolunteerCard;
    }
  }
}
