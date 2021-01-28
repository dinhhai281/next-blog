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

    const { asFragment } = renderWithProviders(
      <Home
        data={{
          allMarkdownRemark: {
            nodes: [],
          },
          allGithubData: {
            nodes: [
              {
                data: {
                  viewer: {
                    avatarUrl: 'avatarUrl',
                    email: 'email',
                    login: 'login',
                    name: 'name',
                  },
                },
              },
            ],
          },
        }}
      ></Home>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
