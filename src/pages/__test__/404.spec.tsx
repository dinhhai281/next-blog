import NotFoundPage from '@app/pages/404';
import { render } from '@testing-library/react';
import React from 'react';

describe('404 Page', () => {
  const renderPage = () => render(<NotFoundPage />);

  describe('when render', () => {
    it('should match snapshot', () => {
      const { asFragment } = renderPage();
      expect(asFragment()).toMatchSnapshot();
    });

    it('should contain text "404 Not Found"', () => {
      const { findByText } = renderPage();
      expect(findByText('404 Not Found')).toBeTruthy();
    });
  });
});
