import { SiteMetadata } from '@app/models';

export const siteMetadataStub: SiteMetadata = {
  title: 'title',
  author: 'author',
  description: 'description',
  keywords: ['1', '2'],
};

export * from './renderWithProviders';
export * from './setupIntersectionObserverMock';
