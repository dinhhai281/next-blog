import React from 'react';
import NotFoundPage from '@app/pages/404';
import { render } from '@testing-library/react';

describe('404 Page', () => {
  describe('when render', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<NotFoundPage />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should contain text "404 Not Found"', () => {
      const { findByText } = render(<NotFoundPage />);
      expect(findByText('404 Not Found')).toBeTruthy();
    });
  });
});
