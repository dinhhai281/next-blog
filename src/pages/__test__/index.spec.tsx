import { renderWithProviders, setupIntersectionObserverMock, siteMetadataStub } from '@app/utils/testing';
import { useStaticQuery } from 'gatsby';
import Home from 'pages';
import React from 'react';

describe('Home', () => {
  beforeAll(() => {
    setupIntersectionObserverMock();
  });

  it('render correctly', () => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      site: { siteMetadata: siteMetadataStub },
    }));

    const { asFragment } = renderWithProviders(<Home></Home>);
    expect(asFragment()).toMatchSnapshot();
  });
});
