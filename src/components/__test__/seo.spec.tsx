import { siteMetadataStub } from '@app/utils/testing';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';

import { SEO } from '../SEO';

describe('SEO', () => {
  it('should render correctly', () => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      site: { siteMetadata: siteMetadataStub },
    }));

    const { asFragment } = render(<SEO />);
    expect(asFragment()).toMatchSnapshot();
  });
});
