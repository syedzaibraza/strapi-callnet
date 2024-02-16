import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutPageButton extends Schema.Component {
  collectionName: 'components_about_page_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    btnLink: Attribute.String;
  };
}

export interface AboutPageContent extends Schema.Component {
  collectionName: 'components_about_page_contents';
  info: {
    displayName: 'content';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    button: Attribute.Component<'about-page.button'>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-page.button': AboutPageButton;
      'about-page.content': AboutPageContent;
    }
  }
}
