import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksContent extends Schema.Component {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media;
  };
}

export interface BlocksFaqs extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ElementsCards extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
    subTitle: Attribute.String;
  };
}

export interface ElementsHeading extends Schema.Component {
  collectionName: 'components_elements_headings';
  info: {
    displayName: 'heading';
    description: '';
  };
  attributes: {
    color: Attribute.Boolean;
    title: Attribute.String;
  };
}

export interface ElementsSocialLinks extends Schema.Component {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Links';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    link: Attribute.String;
    type: Attribute.String;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.content': BlocksContent;
      'blocks.faqs': BlocksFaqs;
      'elements.button-link': ElementsButtonLink;
      'elements.cards': ElementsCards;
      'elements.heading': ElementsHeading;
      'elements.social-links': ElementsSocialLinks;
      'seo.meta-data': SeoMetaData;
    }
  }
}
